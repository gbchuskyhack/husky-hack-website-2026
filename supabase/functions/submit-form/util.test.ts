import { describe, it } from '@std/testing/bdd'
import { assertEquals } from '@std/assert'
import { applyTitleCase, isEmailValid, isNameValid } from './util.ts'

describe('applyTitleCase', () => {
  it('should return the name passed to it in title case format', () => {
    const names = [
      {
        input: 'sOkMoNtReY',
        expected: 'Sokmontrey',
      },
      {
        input: "o'neal",
        expected: "O'Neal",
      },
      {
        input: 'marY-anNe',
        expected: 'Mary-Anne',
      },
      {
        input: 'dos Santos',
        expected: 'Dos Santos',
      },
    ]

    names.forEach((name) => {
      const output = applyTitleCase(name.input)

      assertEquals(output, name.expected)
    })
  })

  it('should trim spaces from names', () => {
    const name = '        caio        '

    const output = applyTitleCase(name)

    assertEquals(output, 'Caio')
  })

  it('should reduce the number of spaces within the name to 1', () => {
    const name = 'dos        Santos'

    const output = applyTitleCase(name)

    assertEquals(output, 'Dos Santos')
  })
})

describe('isNameValid', () => {
  it('should return false if a name contains any characters besides a-zA-Z, spaces, apostrophes, or hyphens', () => {
    const names = [
      {
        input: 'cameron!',
        expected: false,
      },
      {
        input: '4lfred',
        expected: false,
      },
      {
        input: 'sam',
        expected: true,
      },
      {
        input: "o'neal",
        expected: true,
      },
      {
        input: 'Mary-Anne',
        expected: true,
      },
      {
        input: 'dos santos',
        expected: true,
      },
    ]

    names.forEach((name: { input: string; expected: boolean }) => {
      const output = isNameValid(name.input)

      assertEquals(
        output,
        name.expected,
        `Expected "${name.input}" to be ${name.expected ? 'valid' : 'invalid'}`,
      )
    })
  })
})

describe('isEmailValid', () => {
  it('should return true only for valid emails', () => {
    const emails = [
      {
        input: 'test@example.com',
        expected: true,
      },
      {
        input: 'user.name@example.com',
        expected: true,
      },
      {
        input: 'user+tag@example.co.uk',
        expected: true,
      },
      {
        input: 'user_name@example.org',
        expected: true,
      },
      {
        input: 'user123@test-domain.com',
        expected: true,
      },
      {
        input: 'notanemail',
        expected: false,
      },
      {
        input: '@example.com',
        expected: false,
      },
      {
        input: 'user@',
        expected: false,
      },
      {
        input: 'user @example.com',
        expected: false,
      },
      {
        input: 'user@example',
        expected: false,
      },
      {
        input: '',
        expected: false,
      },
    ]

    emails.forEach((email: { input: string; expected: boolean }) => {
      const output = isEmailValid(email.input)

      assertEquals(
        output,
        email.expected,
        `Expected "${email.input}" to be ${
          email.expected ? 'valid' : 'invalid'
        }`,
      )
    })
  })
})
