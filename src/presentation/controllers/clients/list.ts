import { ClientUsecase } from '../../../data/interfaces/usecases/clients'
import { ok } from '../../../presentation/helpers/http_responses'
import { Controller, HttpResponse } from '../../interfaces'

export class ListController implements Controller {
  constructor(private readonly usecase: ClientUsecase) {}

  async handle(): Promise<HttpResponse> {
    const result = await this.usecase.list()

    return ok({ data: result })
  }
}
