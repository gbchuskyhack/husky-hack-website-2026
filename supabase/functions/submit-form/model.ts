type FormData = {
  email: string
}

type FormValidationResult = {
  message: string
  data: object
  error: {
    email: string[]
  }
}

export type { FormData, FormValidationResult }
