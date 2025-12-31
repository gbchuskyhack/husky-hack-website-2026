import { describe, it } from '@std/testing/bdd'
import { assertEquals } from '@std/assert'
import { formData, responseBody } from './model.ts'
import validateFormData from './validateForm.ts'

const nameHasSymbolsErrorMessage = 'Name contains invalid characters'
const invalidEmailFormatErrorMessage = 'Email format is invalid'
const missingEmailFieldErrorMessage = 'Email is required'

describe('validateFormData', () => {
  it('returns an empty body if the form is valid', () => {
    const validEmails = ['example@email.com', 'hackathon+example@email.com']

    validEmails.forEach((email: string) => {
      const form: formData = {
        email: email,
        firstName: 'joHn',
        lastName: 'doE',
      }

      const body = validateFormData(form)

      const expected: responseBody = {
        message: '',
        error: {},
        data: {},
      }
      assertEquals(body, expected)
    })
  })

  describe('validation errors', () => {
    it('adds an error to the email field for an invalid email entry', () => {
      const invalidEmails = ['exampleemail.com.br', 'example@email']

      invalidEmails.forEach((email: string) => {
        const form: formData = {
          email: email,
          firstName: 'joHn',
          lastName: 'doE',
        }

        const body = validateFormData(form)

        const expected: responseBody = {
          message: '',
          error: { email: [invalidEmailFormatErrorMessage] },
          data: {},
        }
        assertEquals(body, expected)
      })
    })
  })

  it('adds an error to the name fields if they contain symbols', () => {
    const namesWithSymbols = [
      {
        firstName: 'jo Hn!',
        lastName: '12doE',
        errors: {
          firstName: [nameHasSymbolsErrorMessage],
          lastName: [nameHasSymbolsErrorMessage],
        },
      },
      {
        firstName: 'john',
        lastName: 'd0e',
        errors: {
          lastName: [nameHasSymbolsErrorMessage],
        },
      },
      {
        firstName: '+john',
        lastName: 'doe',
        errors: {
          firstName: [nameHasSymbolsErrorMessage],
        },
      },
    ]

    namesWithSymbols.forEach(
      ({ firstName, lastName, errors }) => {
        const form: formData = {
          email: 'example@email.com.br',
          firstName: firstName,
          lastName: lastName,
        }

        const body = validateFormData(form)

        const expected: responseBody = {
          message: '',
          error: errors,
          data: {},
        }
        assertEquals(body, expected)
      },
    )
  })

  it('adds an error for an empty email', () => {
    const form: formData = {
      email: '',
      firstName: '',
      lastName: '',
    }

    const body = validateFormData(form)

    const expected: responseBody = {
      message: '',
      error: {
        email: [missingEmailFieldErrorMessage],
      },
      data: {},
    }
    assertEquals(body, expected)
  })
})
