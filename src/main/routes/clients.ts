import { FastifyInstance } from 'fastify'

import { ListController } from '../../presentation/controllers/clients/list'
import { adaptRoute } from '../adapters/fastify_route'
import { ClientUsecase } from '../../data/usecases/v1/clients'
import { ClientRepository } from '../../infra/db/clientsRepository'
import { CreateController } from '../../presentation/controllers/clients/create'
import { clientSchema } from '../../presentation/schemas/client'
import { CipherRepository } from '../../infra/repositories/cipher'
import { authorization } from '../../presentation/middlewares/authorization'

export default (app: FastifyInstance, _options: any, done: any): void => {
  app.get('/clients', {
    preHandler: authorization,
    handler: adaptRoute(new ListController(makeClientUsecase()))
  })

  app.post('/clients', {
    schema: clientSchema,
    preHandler: authorization,
    handler: adaptRoute(new CreateController(makeClientUsecase()))
  })

  done()
}

function makeClientUsecase() {
  return new ClientUsecase(new ClientRepository(), new CipherRepository())
}
