import { ClientRepository as ClientRepositoryInterface } from '../../../data/interfaces/repositories/client'
import { mockClient } from '../../../data/mocks/client'
import { Client } from '../../../data/models/client'

export class ClientRepository implements ClientRepositoryInterface {
  async findAll(): Promise<Client[]> {
    return [mockClient(), mockClient()]
  }
}
