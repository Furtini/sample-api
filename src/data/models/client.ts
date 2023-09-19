interface Address {
  address: string
  postalCode: string
}

export interface Client {
  id: number
  document: string
  name: string
  email?: string
  address?: Address
  createdAt: Date
}
