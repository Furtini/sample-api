import type { ClientUsecase } from '../../../data/interfaces/usecases/clients'
import { ok } from '../../../presentation/helpers/http_responses'
import type { Controller, HttpRequest, HttpResponse } from '../../interfaces'

export class CreateController implements Controller {
  constructor(private readonly usecase: ClientUsecase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    const payload: any = req.body

    const result = await this.usecase.create(payload)

    return ok({ data: result })
  }
}
