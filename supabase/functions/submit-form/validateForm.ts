import { formData, responseBody } from './model.ts'
import { isEmailValid, isNameValid } from './util.ts'

const validateFormData = (form: formData): responseBody => {
  const body: responseBody = {
    message: '',
    data: {},
    error: {},
  }

  if (form.email === '') {
    body.error.email = body.error.email || []
    body.error.email.push('Email is required')
  } else if (!isEmailValid(form.email)) {
    body.error.email = body.error.email || []
    body.error.email.push('Email format is invalid')
  }

  if (form.firstName.length !== 0 && !isNameValid(form.firstName)) {
    body.error.firstName = body.error.firstName || []
    body.error.firstName.push('Name contains invalid characters')
  }

  if (form.lastName.length !== 0 && !isNameValid(form.lastName)) {
    body.error.lastName = body.error.lastName || []
    body.error.lastName.push('Name contains invalid characters')
  }

  return body
}

export default validateFormData
