import jwt from 'jsonwebtoken'

import { UnauthorizedError } from '../../errors'
import { config } from '../../configs/auth'
import type { Middleware } from '../interfaces/middleware'
import type { HttpRequest, HttpResponse } from '../interfaces'

export class Authorization implements Middleware {
  async handle(req: HttpRequest): Promise<HttpResponse | undefined> {
    if (req.method === 'OPTIONS') return

    if (req.headers?.authorization == null) {
      throw new UnauthorizedError({
        message: 'Missing JWT token'
      })
    }

    const token = req.headers.authorization.split(' ')[1]

    try {
      const credentials = jwt.verify(token, config.jwt_key) as Record<string, string>

      if (credentials.name !== 'user name') {
        throw new UnauthorizedError({
          message: 'Invalid credentials'
        })
      }
    } catch (error) {
      console.error(error)
      throw new UnauthorizedError({
        message: 'Invalid JWT token'
      })
    }
  }
}
