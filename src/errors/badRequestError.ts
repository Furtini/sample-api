import { ApplicationError, ErrorCodes, ErrorData } from './applicationError'

export class BadRequestError extends ApplicationError {
  constructor({ message, errorCode }: ErrorData) {
    super({
      message,
      statusCode: 400,
      errorCode: errorCode ?? ErrorCodes.bad_request
    })
  }
}
