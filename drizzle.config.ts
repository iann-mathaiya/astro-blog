import { defineConfig } from "drizzle-kit"
import type { Config } from "drizzle-kit";

export default defineConfig({
    
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_DB_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
  verbose: true,
  strict: true,
}) satisfies Config;
