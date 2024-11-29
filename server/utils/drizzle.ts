import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { schema } from '../database/schema'

export { and, eq, or, sql } from 'drizzle-orm'

export const tables = schema

const config = useRuntimeConfig()
const connection = postgres(config.databaseUrl ?? '')

export function useDrizzle() {
  return drizzle(connection, { schema })
}
