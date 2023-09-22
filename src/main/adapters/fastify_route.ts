import type { FastifyReply, FastifyRequest } from 'fastify'

import type { Controller } from '../../presentation/interfaces'

export function adaptRoute(controller: Controller) {
  return async (req: FastifyRequest, res: FastifyReply) => {
    const response = await controller.handle(req)

    const { statusCode, body } = response

    if (statusCode >= 200 && statusCode <= 299) {
      /* eslint-disable no-void */
      statusCode === 204 ? void res.status(statusCode) : void res.status(statusCode).send(body)
    } else {
      void res.status(statusCode).send({ error: body })
    }
  }
}
