import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

import { clientTableQuery } from './setup'

sqlite3.verbose()

export async function getDb() {
  const db = await open({ filename: '_database/green.sqlite', driver: sqlite3.Database })

  await db.exec('PRAGMA case_sensitive_like=OFF;')
  await db.exec(clientTableQuery)

  return db
}
