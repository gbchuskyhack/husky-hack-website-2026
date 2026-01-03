import { describe, it } from '@std/testing/bdd'
import { assertEquals } from '@std/assert'
import { FormData, FormValidationResult } from './model.ts'
import validateFormData from './validateForm.ts'

const invalidEmailFormatErrorMessage = 'Email format is invalid'
const missingEmailFieldErrorMessage = 'Email is required'

describe('validateFormData', () => {
  it('returns no errors when the form is valid', () => {
    const validEmails = ['example@email.com', 'hackathon+example@email.com']

    validEmails.forEach((email: string) => {
      const form: FormData = {
        email: email,
      }
      const body = validateFormData(form)

      const expected: FormValidationResult = {
        message: '',
        error: {
          email: [],
        },
        data: {},
      }
      assertEquals(body, expected)
    })
  })

  describe('validation errors', () => {
    it('adds an error to the email field for an invalid email entry', () => {
      const invalidEmails = ['exampleemail.com.br', 'example@email']

      invalidEmails.forEach((email: string) => {
        const form: FormData = {
          email: email,
        }

        const body = validateFormData(form)

        const expected: FormValidationResult = {
          message: '',
          error: { email: [invalidEmailFormatErrorMessage] },
          data: {},
        }
        assertEquals(body, expected)
      })
    })
  })

  it('adds an error for an empty email', () => {
    const form: FormData = {
      email: '',
    }

    const body = validateFormData(form)

    const expected: FormValidationResult = {
      message: '',
      error: {
        email: [missingEmailFieldErrorMessage],
      },
      data: {},
    }
    assertEquals(body, expected)
  })
})
