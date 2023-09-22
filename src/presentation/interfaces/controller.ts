import { type FastifyRequest } from 'fastify'
import { type HttpResponse } from './http'

export interface Controller {
  handle: (request: FastifyRequest) => Promise<HttpResponse>
}
