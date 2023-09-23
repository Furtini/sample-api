export interface HttpRequest {
  headers: Record<string, any>
  body: Record<string, any>
  params: Record<string, any>
  query: Record<string, any>
  extras?: Record<string, any>
  method: string
  url: string
}

export interface HttpResponse {
  statusCode: number
  body: Record<string, any> | null
}
