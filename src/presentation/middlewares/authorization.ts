import { FastifyReply, FastifyRequest } from 'fastify'
import jwt from 'jsonwebtoken'

const jwt_secret_key = 'mrGreen'

export async function authorization(req: FastifyRequest, res: FastifyReply) {
  if (req.method === 'OPTIONS') return

  if (req.headers.authorization == null) {
    res.status(401).send({ error: 'Unautorized' })
    return
  }

  const token = req.headers.authorization.split(' ')[1]

  try {
    const credentials = jwt.verify(token, jwt_secret_key) as Record<string, string>

    if (credentials.name !== 'mrGreen') {
      res.status(401).send({ error: 'Unautorized' })
    }
  } catch (error) {
    console.error(error)
    res.status(401).send({ error: 'Unautorized' })
  }
}
