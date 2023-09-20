import { FastifyRequest } from 'fastify'

import { ClientUsecase } from '../../../data/interfaces/usecases/clients'
import { ok } from '../../../presentation/helpers/http_responses'
import { Controller, HttpResponse } from '../../interfaces'

export class ShowController implements Controller {
  constructor(private readonly usecase: ClientUsecase) {}

  async handle(req: FastifyRequest): Promise<HttpResponse> {
    const { id } = req.params as Record<string, any>

    const result = await this.usecase.show(id)

    return ok({ data: result })
  }
}
