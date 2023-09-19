import * as crypto from 'crypto'

import { CipherRepository as CipherRepositoryInterface } from '../../data/interfaces/repositories/cipher'

export class CipherRepository implements CipherRepositoryInterface {
  private readonly keysToCypher: string[] = []

  constructor(keys: string[]) {
    this.keysToCypher = keys
  }

  cypher(data: Record<string, any>): Record<string, any> {
    const iv = crypto.randomBytes(16)

    const cipher = crypto.createCipheriv(
      'aes-256-cbc',
      Buffer.from('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
      iv
    )

    for (let key of this.keysToCypher) {
      if (key in data) {
        let encrypted = cipher.update(data[key], 'utf8', 'hex')
        encrypted += cipher.final('hex')

        data[key] = encrypted
      }
    }

    return data
  }

  decypher(data: Record<string, any>): Record<string, any> {
    for (let key of this.keysToCypher) {
      if (key in data) {
      }
    }

    return data
  }
}
