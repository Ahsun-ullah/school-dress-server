import { NextFunction, Request, RequestHandler, Response } from 'express'

// req handler function
const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

export default catchAsync
