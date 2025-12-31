type FormData = {
  email: string
}

type ResponseBody = {
  message: string
  data: object
  error: {
    email: string[]
  }
}

export type { FormData, ResponseBody }
