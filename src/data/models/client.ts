export interface Client {
  id: number
  document: string
  name: string
  email?: string
  address?: string
  createdAt: Date
}
