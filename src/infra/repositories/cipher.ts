import * as crypto from 'crypto'

import { CipherRepository as CipherRepositoryInterface } from '../../data/interfaces/repositories/cipher'
import { config } from '../../configs/cipher'

export class CipherRepository implements CipherRepositoryInterface {
  private readonly algorithm = config.algorithm
  private readonly iv = Buffer.from(config.iv_key)
  private readonly key = Buffer.from(config.secrect_key)

  cypher(data: string | undefined): string | undefined {
    if (data == null) return

    const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv)

    let encrypted = cipher.update(data, 'utf-8', 'hex')
    encrypted += cipher.final('hex')

    return encrypted
  }

  decypher(data: string | undefined): string | undefined {
    if (data == null) return

    const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv)
    let decrypted = decipher.update(data, 'hex', 'utf-8')
    decrypted += decipher.final('utf-8')

    return decrypted
  }
}
