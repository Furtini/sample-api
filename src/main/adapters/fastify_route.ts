import type { FastifyReply, FastifyRequest } from 'fastify'

import type { Controller, HttpRequest } from '../../presentation/interfaces'

export function adaptRoute(controller: Controller) {
  return async (req: FastifyRequest, res: FastifyReply) => {
    const request: HttpRequest = {
      body: req.body as Record<string, any>,
      params: req.params as Record<string, any>,
      query: req.query as Record<string, any>,
      headers: req.headers,
      method: req.method,
      url: req.url
    }

    const response = await controller.handle(request)

    const { statusCode, body } = response

    if (statusCode >= 200 && statusCode <= 299) {
      /* eslint-disable no-void */
      statusCode === 204 ? void res.status(statusCode) : void res.status(statusCode).send(body)
    } else {
      void res.status(statusCode).send({ error: body })
    }
  }
}
