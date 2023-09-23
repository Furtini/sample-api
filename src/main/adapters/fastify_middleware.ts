import type { FastifyRequest } from 'fastify'

import type { Middleware } from '../../presentation/interfaces/middleware'
import type { HttpRequest } from '../../presentation/interfaces'

type ExtendedRequest = FastifyRequest & Record<string, any>

export function adaptMiddleware(middleware: Middleware) {
  return async (req: ExtendedRequest) => {
    const request: HttpRequest = {
      body: req.body as Record<string, any>,
      params: req.params as Record<string, any>,
      query: req.query as Record<string, any>,
      headers: req.headers,
      method: req.method,
      url: req.url
    }
    const response = await middleware.handle(request)

    if (response == null) return

    if (response.statusCode <= 299) {
      req.extras = req.extras ?? {}
      req.extras = {
        ...req.extras,
        ...response.body
      }
    } else {
      throw new Error('Adapt middleware error')
    }
  }
}
