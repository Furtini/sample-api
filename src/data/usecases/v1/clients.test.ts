import { jest, describe, it, expect, afterAll } from '@jest/globals'

import { ClientUsecase } from './clients'
import { ClientRepository } from '../../../infra/db/clientsRepository'
import { CipherRepository } from '../../../infra/repositories/cipher'
import { mockClient } from '../../mocks/client'

describe('#Client usecase', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })

  const clientRepo = new ClientRepository()
  const cipherRepo = new CipherRepository()

  const findAllSpy = jest.spyOn(clientRepo, 'findAll')
  const createOneSpy = jest.spyOn(clientRepo, 'createOne')

  const cypherSpy = jest.spyOn(cipherRepo, 'cypher')
  const decypherSpy = jest.spyOn(cipherRepo, 'decypher')

  const usecase = new ClientUsecase(clientRepo, cipherRepo)

  describe('#List', () => {
    it('Should return a list of clients', async () => {
      const mocks = [mockClient(), mockClient()]

      findAllSpy.mockReturnValueOnce(Promise.resolve(mocks))

      decypherSpy.mockReturnValueOnce(mocks[0].document)
      decypherSpy.mockReturnValueOnce(mocks[0].name)
      decypherSpy.mockReturnValueOnce(mocks[0].email)
      decypherSpy.mockReturnValueOnce(mocks[0].address)

      decypherSpy.mockReturnValueOnce(mocks[1].document)
      decypherSpy.mockReturnValueOnce(mocks[1].name)
      decypherSpy.mockReturnValueOnce(mocks[1].email)
      decypherSpy.mockReturnValueOnce(mocks[1].address)

      const results = await usecase.list()

      expect(results).toHaveLength(2)

      for (let id in results) {
        expect(results[id]).toHaveProperty('id', mocks[id].id)
        expect(results[id]).toHaveProperty('document', mocks[id].document)
      }

      expect(findAllSpy).toHaveBeenCalledTimes(1)
      expect(decypherSpy).toHaveBeenCalledTimes(8)
    })
  })

  describe('#Create', () => {
    it('Should create new client', async () => {
      const payload = {
        data: {
          document: 'doc',
          name: 'name'
        }
      }

      cypherSpy.mockReturnValue('12asd')

      createOneSpy.mockReturnValueOnce(Promise.resolve(1))

      const result = await usecase.create(payload)

      expect(result).toHaveProperty('id', 1)
      expect(result).toHaveProperty('document', payload.data.document)
      expect(result).toHaveProperty('name', payload.data.name)

      expect(cypherSpy).toHaveBeenCalledTimes(2)
      expect(createOneSpy).toHaveBeenCalledTimes(1)
    })
  })
})
