import { sql } from "@vercel/postgres"
import { sessions, users } from "./schema"
import { drizzle } from "drizzle-orm/vercel-postgres"
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";

export const db = drizzle(sql)

export const adapter = new DrizzlePostgreSQLAdapter(db, sessions, users)