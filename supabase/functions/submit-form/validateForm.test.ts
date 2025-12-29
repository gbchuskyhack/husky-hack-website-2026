import { describe, it } from '@std/testing/bdd'
import { assertEquals } from '@std/assert'
import { formData, responseBody } from './model.ts'
import validateFormData from './validateForm.ts'

describe('validateFormData', () => {
  it('returns an empty body if the form is valid ', () => {
    const form: formData = {
      email: 'example@email.com.br',
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

  describe('validation errors', () => {
    it('adds an error to the email field for an invalid email entry', () => {
      const form: formData = {
        email: 'exampleemail.com.br',
        firstName: 'joHn',
        lastName: 'doE',
      }

      const body = validateFormData(form)

      const expected: responseBody = {
        message: '',
        error: { email: ['Not a valid email'] },
        data: {},
      }
      assertEquals(body, expected)
    })
  })
  it('adds an error to the name fields if they contain symbols', () => {
    const form: formData = {
      email: 'example@email.com.br',
      firstName: 'jo Hn!',
      lastName: '12doE',
    }

    const body = validateFormData(form)

    const expected: responseBody = {
      message: '',
      error: {
        firstName: ['Names should not contain symbols'],
        lastName: ['Names should not contain symbols'],
      },
      data: {},
    }
    assertEquals(body, expected)
  })
  it('adds an error to each required field that is empty', () => {
    const form: formData = {
      email: '',
      firstName: '',
      lastName: '',
    }

    const body = validateFormData(form)

    const expected: responseBody = {
      message: '',
      error: {
        email: ['Email is required'],
      },
      data: {},
    }
    assertEquals(body, expected)
  })
})
