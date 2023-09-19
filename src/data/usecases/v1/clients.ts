import { Client } from '../../models/client'
import { ClientUsecase as ClientUsecaseInterface } from '../../interfaces/usecases/clients'
import { mockClient } from '../../mocks/client'

export class ClientUsecase implements ClientUsecaseInterface {
  async list(): Promise<Client[]> {
    // decrypt all data
    const clients = Promise.resolve([mockClient(), mockClient()])

    return clients
  }
}
