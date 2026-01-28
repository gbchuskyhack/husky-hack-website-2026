import { FormData, FormValidationResult } from './model.ts'
import validateFormData from './validateForm.ts'
import { createClient } from '@supabase/supabase-js'
import { Database } from './databaseTypes.ts'
import { createResponse } from './util.ts'
import { corsHeaders } from '../_shared/cors.ts'
const PG_DUPLICATE_KEY_VIOLATION = '23505'


const HttpStatus = Object.freeze({
  OK: 200,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
})


const errorsWereSet = (body: FormValidationResult): boolean =>
  Object.values(body.error).some((errors) => errors.length > 0)

Deno.serve(async (req: Request) => {

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  let raw: FormData | null

  const incomingSecret = req.headers.get('x-cf-secret')

  const expectedSecret = Deno.env.get('CF_GATEWAY_SECRET')

  // THE SECURITY CHECK
  // If they don't match, reject immediately to save processing power.
  if (incomingSecret !== expectedSecret) {

    const body: FormValidationResult = {
      message: 'Invalid secret',
      data: {},
      error: { email: [] },
    }
    return createResponse(body, HttpStatus.FORBIDDEN)
  }

  // Safely retrieve environment variables inside the handler
  const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
  const SB_SUBMISSION_SECRET = Deno.env.get('SB_SUBMISSION_SECRET')
  const SB_CAPTCHA_VALIDATOR_ENDPOINT = Deno.env.get('SB_CAPTCHA_VALIDATOR_ENDPOINT')

  // Validate environment variables
  if (!SUPABASE_URL || !SB_SUBMISSION_SECRET || !SB_CAPTCHA_VALIDATOR_ENDPOINT) {
    console.error('Missing environment variables')
    const body: FormValidationResult = {
      message: 'Server configuration error',
      data: {},
      error: { email: [] },
    }
    return createResponse(body, HttpStatus.INTERNAL_SERVER_ERROR)
  }

  const CAPTCHA_ENDPOINT = new URL(SB_CAPTCHA_VALIDATOR_ENDPOINT)



  const captchaToken = req.headers.get('x-recaptcha-token')
  if (captchaToken === null) {
    const body: FormValidationResult = {
      message: 'Missing recaptcha token',
      data: {},
      error: { email: [] },
    }
    return createResponse(body, HttpStatus.FORBIDDEN)
  }

  try {
    const captchaResult = await fetch(
      new Request(CAPTCHA_ENDPOINT, {
        method: 'POST',
        headers: {
          'x-recaptcha-token': captchaToken,
        },
      }),
    )

    if (captchaResult.success === false) { // adapting to likely intended behavior
      const body: FormValidationResult = {
        message: 'Unable to verify you are a human',
        data: {},
        error: { email: [] },
      }
      return createResponse(body, HttpStatus.FORBIDDEN)
    }

  } catch (err) {
    console.error('Captcha check failed', err)
    const body: FormValidationResult = {
      message: 'Captcha verification failed',
      data: {},
      error: { email: [] },
    }
    return createResponse(body, HttpStatus.INTERNAL_SERVER_ERROR)
  }

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
    SUPABASE_URL,
    SB_SUBMISSION_SECRET,
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
