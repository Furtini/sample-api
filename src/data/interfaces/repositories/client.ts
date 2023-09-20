import { Client } from '../../models/client'

export interface ClientRepository {
  findAll: () => Promise<Client[]>
  createOne: (data: Omit<Client, 'id'>) => Promise<number | undefined>
}
