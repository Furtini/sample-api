import { ApplicationError, ErrorCodes, ErrorData } from './applicationError'

export class UnauthorizedError extends ApplicationError {
  constructor({ message, errorCode }: ErrorData) {
    super({
      message,
      statusCode: 401,
      errorCode: errorCode ?? ErrorCodes.unauthorized
    })
  }
}
