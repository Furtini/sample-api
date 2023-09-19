import { jest, describe, it, expect, afterAll } from '@jest/globals'
import { ClientUsecase } from './clients'
import { ClientRepository } from '../../../infra/db/repositories/client'

describe('#Client usecase', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })

  const clientRepo = new ClientRepository()

  const usecase = new ClientUsecase(clientRepo)

  describe('#List', () => {
    it('Should return a list of clients', async () => {
      const results = await usecase.list()

      expect(results).toHaveLength(2)

      for (let result of results) {
        expect(result).toHaveProperty('id')
      }
    })
  })
})
