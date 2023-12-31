import dotenv from 'dotenv'

import { app } from './app'
import { config } from '../configs/api'
dotenv.config()

async function start(): Promise<void> {
  await app.setup()

  app.listen(config.port, '0.0.0.0', () => {
    console.log(`Server listening at http://localhost:${config.port}`)
  })
}

start().catch((err) => {
  console.error(err)
  process.exit(1)
})
