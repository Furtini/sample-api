import { type Client } from '../../models/client'

export interface ClientRepository {
  findAll: () => Promise<Client[]>
  findById: (id: number) => Promise<Client | undefined>
  createOne: (data: Omit<Client, 'id'>) => Promise<number | undefined>
}
