import { Response } from 'express'

type IApiResponse<T> = {
  StatusCode: number
  success: boolean
  message?: string | null
  meta?: {
    page: number
    limit: number
    total: number
  }
  data?: T | null
}

const sendResponse = <T>(res: Response, data: IApiResponse<T>) => {
  const responseData = {
    StatusCode: data.StatusCode,
    success: data.success,
    message: data.message || null,
    meta: data.meta || null || undefined,
    data: data.data || null,
  }
  res.status(data.StatusCode).json(responseData)
}

export default sendResponse
