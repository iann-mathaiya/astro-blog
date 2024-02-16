import "dotenv/config"
import type { Config } from "drizzle-kit"

export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: import.meta.env.POSTGRES_URL + "?sslmode=require",
  },
  verbose: true,
  strict: true,
} satisfies Config