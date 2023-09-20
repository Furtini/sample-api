import { FastifyRequest } from 'fastify'

import { ClientUsecase } from '../../../data/interfaces/usecases/clients'
import { ok } from '../../../presentation/helpers/http_responses'
import { Controller, HttpResponse } from '../../interfaces'

export class CreateController implements Controller {
  constructor(private readonly usecase: ClientUsecase) {}

  async handle(req: FastifyRequest): Promise<HttpResponse> {
    const payload: any = req.body
    console.log(payload)

    const result = await this.usecase.create(payload)

    return ok({ data: result })
  }
}
