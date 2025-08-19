import type { Config } from 'drizzle-kit'
import process from 'node:process'
import 'dotenv/config'

export default {
  dialect: 'postgresql',
  schema: './db/schema/*',
  out: './db/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config
