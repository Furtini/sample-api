const jwt = require('jsonwebtoken')

const key = 'mrGreen'

const payload = {
  name: 'mrGreen'
}

const token = jwt.sign(payload, key, { algorithm: 'HS256', expiresIn: '10d' })
console.log(token)
