import { Client } from '../../models/client'

export interface ClientUsecase {
  list: () => Promise<Client[]>
}
