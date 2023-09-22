import { type HttpResponse } from '../interfaces'

export function ok(data: any = {}): HttpResponse {
  return {
    statusCode: 200,
    body: data
  }
}

export function noContent(): HttpResponse {
  return {
    statusCode: 204,
    body: null
  }
}
