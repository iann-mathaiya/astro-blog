import { sql } from "@vercel/postgres"
import type { VercelRequest, VercelResponse } from "@vercel/node"

export default async function POST(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
    const result =
      await sql`CREATE TABLE Users ( username text(255), hashed_password text(255), email_address text(255) );`
    return response.status(200).json({ result })
  } catch (error) {
    return response.status(500).json({ error })
  }
}
