import { FormData, FormValidationResult } from './model.ts'
import { isEmailValid } from './util.ts'

const validateFormData = (form: FormData): FormValidationResult => {
  const body: FormValidationResult = {
    message: '',
    data: {},
    error: {
      email: [],
    },
  }

  if (form.email === '') {
    body.error.email.push('Email is required')
  } else if (!isEmailValid(form.email)) {
    body.error.email.push('Email format is invalid')
  }

  return body
}

export default validateFormData
