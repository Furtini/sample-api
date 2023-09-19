import { FastifyReply, FastifyRequest } from 'fastify'

import { Controller } from '../../presentation/interfaces'

export function adaptRoute(controller: Controller) {
  return async (req: FastifyRequest, res: FastifyReply) => {
    const response = await controller.handle(req)

    const { statusCode, body } = response

    if (statusCode >= 200 && statusCode <= 299) {
      statusCode === 204 ? void res.status(statusCode) : void res.status(statusCode).send(body)
    } else {
      void res.status(statusCode).send({ error: body })
    }
  }
}
