const clientBodyJsonSchema = {
  type: 'object',
  required: ['data'],
  properties: {
    data: {
      type: 'object',
      required: ['document', 'name'],
      properties: {
        document: { type: 'string' },
        name: { type: 'string' }
      }
    }
  }
}

export const clientSchema = {
  body: clientBodyJsonSchema
}
