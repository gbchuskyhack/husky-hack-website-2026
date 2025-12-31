import { formData, responseBody } from './model.ts'
import { isEmailValid, isNameValid } from './util.ts'

const validateFormData = (form: formData): responseBody => {
  const body: responseBody = {
    message: '',
    data: {},
    error: {
      email: []
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
