export interface CipherRepository {
  cypher: (data: Record<string, any>) => Record<string, any>
  decypher: (data: Record<string, any>) => Record<string, any>
}
