import { describe, it, expect } from '@jest/globals'
import { CipherRepository } from './cipher'

describe('#Cipher test', () => {
  const cipher = new CipherRepository(['a', 'b'])

  describe('#Cypher', () => {
    it('Should cipher a object', () => {
      const obj = {
        a: 'some',
        b: 'test'
      }

      const result = cipher.cypher(obj)

      expect(result).toHaveProperty('a')
      expect(result).toHaveProperty('b')

      expect(result['a']).not.toBe(obj.a)
    })
  })
})
