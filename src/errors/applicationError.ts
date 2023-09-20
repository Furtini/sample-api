export enum ErrorCodes {
  bad_request,
  unauthorized,
  resource_not_found
}

export interface ErrorData {
  message: string
  errorCode?: ErrorCodes
  statusCode?: number
}

export abstract class ApplicationError extends Error {
  public errorCode: string
  public statusCode: number

  constructor(data: ErrorData) {
    super(data.message)

    this.statusCode = data.statusCode ?? 400
    this.errorCode =
      data.errorCode != null ? ErrorCodes[data.errorCode] : ErrorCodes[ErrorCodes.bad_request]
  }
}
