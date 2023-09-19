import { FastifyRequest } from 'fastify'
import { HttpResponse } from './http'

export interface Controller {
  handle: (request: FastifyRequest) => Promise<HttpResponse>
}
