import { type Client } from '../../models/client'

export interface CreatePayload {
  data: Omit<Client, 'id' | 'createdAt'>
}

export interface ClientUsecase {
  create: (payload: CreatePayload) => Promise<Client>
  show: (id: number) => Promise<Client>
  list: () => Promise<Client[]>
}
