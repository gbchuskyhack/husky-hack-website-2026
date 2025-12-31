import { FormData, ResponseBody } from './model.ts'
import validateFormData from './validateForm.ts'
import { createClient } from '@supabase/supabase-js'
import { Database } from './databaseTypes.ts'

const PG_DUPLICATE_KEY_VIOLATION = '23505'

const errorsWereSet = (body: ResponseBody): boolean =>
  Object.values(body.error).some((arr) => arr.length > 0)

Deno.serve(async (req: Request) => {
  const raw: FormData = await req.json()

  const form: FormData = {
    email: raw.email.trim().toLowerCase(),
  }

  const body = validateFormData(form)

  if (errorsWereSet(body)) {
    return new Response(
      JSON.stringify(body),
      {
        headers: {
          'Content-Type': 'application/json',
          'Connection': 'keep-alive',
        },
        status: 400,
      },
    )
  }

  const supabase = createClient<Database>(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SB_SUBMISSION_SECRET')!,
  )

  const { error } = await supabase.from('users').insert({
    email: form.email,
  })

  if (error !== null) {
    if (error.code === PG_DUPLICATE_KEY_VIOLATION) { // email is already registered
      console.log(error)
      body.error.email.push('This email is already registered')
      body.message = 'Please check the fields and try again'
      return new Response(
        JSON.stringify(body),
        {
          headers: {
            'Content-Type': 'application/json',
            'Connection': 'keep-alive',
          },
          status: 403,
        },
      )
    }
    console.log(error)
    body.message = 'Something went wrong. Unable to fulfill request'
    return new Response(
      JSON.stringify(body),
      {
        headers: {
          'Content-Type': 'application/json',
          'Connection': 'keep-alive',
        },
        status: 500,
      },
    )
  }

  body.message = 'Thank you for signing up! We will notify you of any updates!'
  return new Response(
    JSON.stringify(body),
    {
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
      },
      status: 200,
    },
  )
})
