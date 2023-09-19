import { FastifyInstance } from 'fastify'

import clientRoutes from '../../routes/clients'

export async function setupRoutes(app: FastifyInstance): Promise<void> {
  await app.register(clientRoutes, { prefix: 'api/v1' })
}
