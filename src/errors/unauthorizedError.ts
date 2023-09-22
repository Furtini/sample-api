import { ApplicationError, ErrorCodes, type ErrorData } from './applicationError'

export class UnauthorizedError extends ApplicationError {
  constructor({ message, errorCode }: ErrorData) {
    super({
      message,
      statusCode: 401,
      errorCode: errorCode ?? ErrorCodes.unauthorized
    })
  }
}
