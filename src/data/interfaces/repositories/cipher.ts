export interface CipherRepository {
  cypher: (data: string | undefined) => string | undefined
  decypher: (data: string | undefined) => string | undefined
}
