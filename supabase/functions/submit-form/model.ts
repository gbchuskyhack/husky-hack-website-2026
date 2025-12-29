type formData = {
  email: string
  firstName: string
  lastName: string
}

type responseBody = {
  message: string
  data: object
  error: {
    email?: string[]
    firstName?: string[]
    lastName?: string[]
  }
}

export type { formData, responseBody }
