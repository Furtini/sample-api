import { type ClientRepository as ClientRepositoryInterface } from '../../data/interfaces/repositories/client'
import { type Client } from '../../data/models/client'
import { ErrorCodes, BadRequestError } from '../../errors'
import { getDb } from './connection'

export class ClientRepository implements ClientRepositoryInterface {
  async findAll(): Promise<Client[]> {
    const query = 'SELECT * FROM clients'

    const db = await getDb()
    const results = await db.all<Client[]>(query)
    return results
  }

  async findById(id: number): Promise<Client | undefined> {
    const query = `SELECT * FROM clients WHERE id = ?;`

    const db = await getDb()
    const result = await db.get<Client>(query, id)
    return result
  }

  async createOne(data: Omit<Client, 'id'>): Promise<number | undefined> {
    const query = `
      INSERT INTO clients (document, name, email, address, createdAt)
      VALUES (?, ?, ?, ?, ?);
    `

    try {
      const db = await getDb()
      const result = await db.run(
        query,
        data.document,
        data.name,
        data.email,
        data.address,
        data.createdAt?.toISOString()
      )

      return result.lastID
    } catch (error) {
      // TODO: Check for other SQLITE errors
      throw new BadRequestError({
        message: 'Client already created',
        errorCode: ErrorCodes.resource_duplicated
      })
    }
  }
}
