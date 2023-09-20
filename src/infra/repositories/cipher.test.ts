import { describe, it, expect } from '@jest/globals'
import { CipherRepository } from './cipher'

describe('#Cipher test', () => {
  const repo = new CipherRepository()

  it('Should cipher a string', () => {
    const test = 'sample'

    const result = repo.cypher(test)
    expect(result).not.toBe(test)
  })

  it('Should decipher a string', () => {
    const test = 'sample'
    const cipher = repo.cypher(test)

    const result = repo.decypher(cipher)
    expect(result).toBe(test)
  })
})
