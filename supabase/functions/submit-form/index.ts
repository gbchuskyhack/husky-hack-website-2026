import { formData, responseBody } from './model.ts'
import validateFormData from './validateForm.ts'
import { createClient } from 'npm:@supabase/supabase-js'
import { Database } from './databaseTypes.ts'
import { applyTitleCase } from './util.ts'

const errorsWereSet = (body: responseBody): boolean =>
  Object.keys(body.error).length !== 0

Deno.serve(async (req: Request) => {
  const form: formData = {
    email: '',
    firstName: '',
    lastName: '',
  }
  const raw: formData = await req.json()

  form.email = raw.email.trim().toLowerCase()
  form.firstName = applyTitleCase(raw.firstName)
  form.lastName = applyTitleCase(raw.lastName)

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
    Deno.env.get('SUBMISSION_SECRET')!,
  )

  const { error } = await supabase.from('users').insert({
    email: form.email,
    first_name: form.firstName.length === 0 ? null : form.firstName,
    last_name: form.lastName.length === 0 ? null : form.lastName,
  })
  if (error !== null) {
    if (error.code === '23505') { // email is already registered
      console.log(error)
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
