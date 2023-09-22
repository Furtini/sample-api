const jwt = require('jsonwebtoken')

const key = 'secret'

const payload = {
  name: 'user name'
}

const token = jwt.sign(payload, key, { algorithm: 'HS256', expiresIn: '10d' })
console.log(token)
