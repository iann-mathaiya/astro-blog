import { Lucia } from "lucia"
import { adapter } from "../db/drizzle"

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: import.meta.env.PROD,
    },
  },
  getUserAttributes: (attributes) => {
    return {
      // attributes has the type of DatabaseUserAttributes
      username: attributes.username,
      emailAddress: attributes.email_address,
	  hashedPassword: attributes.hashed_password,
    }
  },
})

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia
    DatabaseUserAttributes: DatabaseUserAttributes
  }
}

interface DatabaseUserAttributes {
  username: string
  email_address: string
  hashed_password: string
}
