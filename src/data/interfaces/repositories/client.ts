import { Client } from '../../models/client'

export interface ClientRepository {
  findAll: () => Promise<Client[]>
}
