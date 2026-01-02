import { FormData, FormValidationResult } from './model.ts'
import validateFormData from './validateForm.ts'
import { createClient } from '@supabase/supabase-js'
import { Database } from './databaseTypes.ts'
import { createResponse } from './util.ts'

const PG_DUPLICATE_KEY_VIOLATION = '23505'
const CAPTCHA_ENDPOINT = new URL(Deno.env.get('SB_CAPTCHA_VALIDATOR_ENDPOINT')!)

const HttpStatus = Object.freeze({
  OK: 200,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
})

const errorsWereSet = (body: FormValidationResult): boolean =>
  Object.values(body.error).some((errors) => errors.length > 0) // after

Deno.serve(async (req: Request) => {
  let raw: FormData | null

  // console.log(req.headers.get('x-recaptcha-token'))

  if (req.headers.get('x-recaptcha-token') === null) {
    const body: FormValidationResult = {
      message: 'Missing recaptcha token',
      data: {},
      error: { email: [] },
    }
    return createResponse(body, HttpStatus.FORBIDDEN)
  }

  fetch(
    new Request(CAPTCHA_ENDPOINT, {
      method: 'POST',
    }),
  )

  try {
    raw = await req.json()
  } catch (e) {
    const body: FormValidationResult = {
      message: '',
      data: {},
      error: { email: [] },
    }
    let statusCode: number | null
    if (e instanceof SyntaxError) {
      statusCode = HttpStatus.BAD_REQUEST
      body.message = `Malformed json: ${e.message}`
    } else if (e instanceof TypeError) {
      body.message = `Invalid request: ${e.message}`
      statusCode = HttpStatus.INTERNAL_SERVER_ERROR
    }
    return createResponse(body, statusCode!)
  }

  const form: FormData = {
    email: raw!.email.trim().toLowerCase(),
  }

  const body = validateFormData(form)

  if (errorsWereSet(body)) return createResponse(body, HttpStatus.BAD_REQUEST)

  const supabase = createClient<Database>(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SB_SUBMISSION_SECRET')!,
  )

  const { error } = await supabase.from('users').insert({
    email: form.email,
  })

  if (error?.code === PG_DUPLICATE_KEY_VIOLATION) { // email is already registered
    console.log(error)
    body.error.email.push('This email is already registered')
    body.message = 'Please check the fields and try again'
    return createResponse(body, HttpStatus.CONFLICT)
  } else if (error !== null) {
    console.log(error)
    body.message = 'Something went wrong. Unable to fulfill request'
    return createResponse(body, HttpStatus.INTERNAL_SERVER_ERROR)
  }

  body.message = 'Thank you for signing up! We will notify you of any updates!'
  return createResponse(body, HttpStatus.OK)
})
