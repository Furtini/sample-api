import { type FastifyRequest } from 'fastify'

import { type ClientUsecase } from '../../../data/interfaces/usecases/clients'
import { ok } from '../../../presentation/helpers/http_responses'
import { type Controller, type HttpResponse } from '../../interfaces'

export class CreateController implements Controller {
  constructor(private readonly usecase: ClientUsecase) {}

  async handle(req: FastifyRequest): Promise<HttpResponse> {
    const payload: any = req.body
    console.log(payload)

    const result = await this.usecase.create(payload)

    return ok({ data: result })
  }
}
