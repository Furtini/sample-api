import { ApplicationError, ErrorCodes } from './applicationError'

export class NotFoundError extends ApplicationError {
  constructor(message: string) {
    super({
      errorCode: ErrorCodes.resource_not_found,
      message: message ?? 'Resource not found',
      statusCode: 404
    })
  }
}
