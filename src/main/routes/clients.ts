import type { FastifyInstance } from 'fastify'

import { ListController } from '../../presentation/controllers/clients/list'
import { adaptRoute } from '../adapters/fastify_route'
import { adaptMiddleware } from '../adapters/fastify_middleware'
import { ClientUsecase } from '../../data/usecases/v1/clients'
import { ClientRepository } from '../../infra/db/clientsRepository'
import { CreateController } from '../../presentation/controllers/clients/create'
import { clientSchema } from '../../presentation/schemas/client'
import { CipherRepository } from '../../infra/libs/cipher'
import { Authorization } from '../../presentation/middlewares/authorization'
import { ShowController } from '../../presentation/controllers/clients/show'

export default (app: FastifyInstance, _options: any, done: any): void => {
  app.get('/clients', {
    preHandler: [adaptMiddleware(new Authorization())],
    handler: adaptRoute(new ListController(makeClientUsecase()))
  })

  app.get('/clients/:id', {
    preHandler: [adaptMiddleware(new Authorization())],
    handler: adaptRoute(new ShowController(makeClientUsecase()))
  })

  app.post('/clients', {
    schema: clientSchema,
    preHandler: [adaptMiddleware(new Authorization())],
    handler: adaptRoute(new CreateController(makeClientUsecase()))
  })

  done()
}

function makeClientUsecase(): any {
  return new ClientUsecase(new ClientRepository(), new CipherRepository())
}
