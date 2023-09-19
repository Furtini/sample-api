import { Client } from '../../models/client'
import { ClientUsecase as ClientUsecaseInterface } from '../../interfaces/usecases/clients'
import { ClientRepository } from '../../interfaces/repositories/client'

export class ClientUsecase implements ClientUsecaseInterface {
  constructor(private readonly clientRepo: ClientRepository) {}

  async list(): Promise<Client[]> {
    const clients = await this.clientRepo.findAll()

    // decrypt all data
    return clients
  }
}
