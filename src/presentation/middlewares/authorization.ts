import { FastifyReply, FastifyRequest } from 'fastify'
import jwt from 'jsonwebtoken'
import { UnauthorizedError } from '../../errors/unauthorizedError'

const jwt_secret_key = 'mrGreen'

export async function authorization(req: FastifyRequest, res: FastifyReply) {
  if (req.method === 'OPTIONS') return

  if (req.headers.authorization == null) {
    throw new UnauthorizedError({
      message: 'Missing JWT token'
    })
  }

  const token = req.headers.authorization.split(' ')[1]

  try {
    const credentials = jwt.verify(token, jwt_secret_key) as Record<string, string>

    if (credentials.name !== 'mrGreen') {
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
