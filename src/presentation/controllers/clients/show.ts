import type { ClientUsecase } from '../../../data/interfaces/usecases/clients'
import { ok } from '../../../presentation/helpers/http_responses'
import type { Controller, HttpRequest, HttpResponse } from '../../interfaces'

export class ShowController implements Controller {
  constructor(private readonly usecase: ClientUsecase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    const { id } = req.params

    const result = await this.usecase.show(id)

    return ok({ data: result })
  }
}
