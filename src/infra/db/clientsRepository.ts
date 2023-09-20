import { ClientRepository as ClientRepositoryInterface } from '../../data/interfaces/repositories/client'
import { Client } from '../../data/models/client'
import { getDb } from './connection'

export class ClientRepository implements ClientRepositoryInterface {
  async findAll(): Promise<Client[]> {
    const query = 'SELECT * FROM clients'

    const db = await getDb()
    const results = await db.all<Client[]>(query)
    return results
  }
}
