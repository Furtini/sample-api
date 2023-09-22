import fastify, { type FastifyInstance } from 'fastify'

import { setupRoutes } from './setup/routes'

class App {
  private readonly app: FastifyInstance

  constructor() {
    this.app = fastify({ logger: true })
  }

  async setup(): Promise<void> {
    await setupRoutes(this.app)
  }

  listen(port: number, host: string, cb: () => void): void {
    this.app.listen({ port, host }, cb)
  }
}

export const app = new App()
