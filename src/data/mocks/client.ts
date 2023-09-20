import { Client } from '../models/client'

let id = 1

export function mockClient(attributes?: Partial<Client>): Client {
  const payload: Client = {
    id,
    name: 'fake_name_' + id,
    document: 'fake_doc_' + id,
    email: 'fake_email_' + id,
    address: 'fake_address_line' + id,
    createdAt: new Date(),
    ...attributes
  }

  id++
  return payload
}
