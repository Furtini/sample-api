import { Client } from '../../models/client'
import {
  ClientUsecase as ClientUsecaseInterface,
  CreatePayload
} from '../../interfaces/usecases/clients'
import { ClientRepository } from '../../interfaces/repositories/client'
import { CipherRepository } from '../../interfaces/repositories/cipher'
import { BadRequestError, NotFoundError } from '../../../errors'

export class ClientUsecase implements ClientUsecaseInterface {
  constructor(
    private readonly clientRepo: ClientRepository,
    private readonly cipherRepo: CipherRepository
  ) {}

  async list(): Promise<Client[]> {
    const clients = await this.clientRepo.findAll()

    return clients.map((client) => this.decryptData(client))
  }

  async show(id: number): Promise<Client> {
    const client = await this.clientRepo.findById(id)
    if (client == null) {
      throw new NotFoundError('Client not found')
    }

    return this.decryptData(client)
  }

  async create(payload: CreatePayload): Promise<any> {
    try {
      const createdAt = new Date()

      const newClientId = await this.clientRepo.createOne(this.encryptData(payload, createdAt))

      return { id: newClientId, ...payload.data, createdAt }
    } catch (error) {
      console.error(error)
      throw new BadRequestError({
        message: 'Unable to create new client'
      })
    }
  }

  private encryptData(payload: CreatePayload, createdAt: Date): Omit<Client, 'id'> {
    const encrypted: Omit<Client, 'id'> = {
      document: this.cipherRepo.cypher(payload.data.document) ?? '',
      name: this.cipherRepo.cypher(payload.data.name) ?? '',
      createdAt
    }

    if (payload.data.address != null) {
      encrypted.address = this.cipherRepo.cypher(payload.data.address)
    }

    if (payload.data.email != null) {
      encrypted.email = this.cipherRepo.cypher(payload.data.email)
    }

    return encrypted
  }

  private decryptData(data: Client): Client {
    const decrypted: Client = {
      id: data.id,
      document: this.cipherRepo.decypher(data.document) ?? '',
      name: this.cipherRepo.decypher(data.name) ?? '',
      createdAt: data.createdAt
    }

    if (data.address != null) {
      decrypted.address = this.cipherRepo.decypher(data.address)
    }

    if (data.email != null) {
      decrypted.email = this.cipherRepo.decypher(data.email)
    }
    return decrypted
  }
}
