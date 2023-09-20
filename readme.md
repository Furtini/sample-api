# MrGreen Api sample

Simple API Design to manage new clients.

## Getting Started

Node version: >= 20

Install:

```bash
  npm i
```

Build server:

```bash
npm run build
```

Run the development server:

```bash
npm run start
```

Tests:

```bash
npm run test
```

### Database

Simple Sqlite database.

### Model

```ts
interface Client {
  id: string
  document: string // unique on DB
  name: string
  email?: string
  address?: string
  createdAt: Date
}
```

## Routes

To use the api you need a JWT token as part of authorization header of the requests.
You can generate a new token running:

```
  node scripts/token.js
```

Or use this one:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibXJHcmVlbiIsImlhdCI6MTY5NTIxNDI2MywiZXhwIjoxNjk2MDc4MjYzfQ.XqRmHXMfq75bFMA8vg591SrURowOEEGlSn4fPDBtARs
```

Base url: `/api/v1`

### List clients

GET: /clients

Return all clients created

### Show a client by id

GET: /clients/:id

Return the client or not found

### Create a new client

POST: /clients

Create a new client.

Payload example:

```json
{
    "data": {
        "document": "12345", (required)
        "name": "Lucas", (required)
        "email": "email@email",
        "address": "address"
    }
}
```

Returns the new created client or throw a erro when the document already exists in the database.

## Improvments

* Improve error handler
* Add authorization Routes
* Improve cipher methods and class
* Improve import paths
* Improve db connection and tests


