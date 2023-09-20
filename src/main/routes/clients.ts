import { FastifyInstance } from 'fastify'

import { ListController } from '../../presentation/controllers/clients/list'
import { adaptRoute } from '../adapters/fastify_route'
import { ClientUsecase } from '../../data/usecases/v1/clients'
import { ClientRepository } from '../../infra/db/clientsRepository'

export default (app: FastifyInstance, _options: any, done: any): void => {
  app.get('/clients', {
    handler: adaptRoute(new ListController(new ClientUsecase(new ClientRepository())))
  })

  done()
}
