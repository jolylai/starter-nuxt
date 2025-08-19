import process from 'node:process'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { schema } from '../../db/schema'

export const tables = schema

const connection = postgres(process.env.DATABASE_URL || '', {
  prepare: false,
})

export function useDrizzle() {
  return drizzle(connection, { schema })
}
