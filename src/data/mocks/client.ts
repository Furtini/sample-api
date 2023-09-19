import { Client } from '../models/client'

let id = 1

export function mockClient(attributes?: Partial<Client>): Client {
  const payload: Client = {
    id: id++,
    name: 'fake_name_' + id,
    document: 'fake_doc_' + id,
    email: 'fake_email_' + id,
    address: {
      address: 'some_address',
      postalCode: 'some_postal_code'
    },
    createdAt: new Date(),
    ...attributes
  }

  return payload
}
