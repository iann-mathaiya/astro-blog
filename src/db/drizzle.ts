import { sessions, users } from "./schema"
import { createPool } from "@vercel/postgres"
import { drizzle } from "drizzle-orm/vercel-postgres"
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle"

const pool = createPool({
  connectionString: import.meta.env.POSTGRES_URL + "?sslmode=require",
})

export const db = drizzle(pool)

export const adapter = new DrizzlePostgreSQLAdapter(db, sessions, users)
