import { Argon2id } from "oslo/password"

import { db } from "../../db/drizzle"
import { lucia } from "../../lib/auth"
import type { APIContext } from "astro"
import { users } from "../../db/schema"
import { eq } from "drizzle-orm"

export async function POST(context: APIContext): Promise<Response> {
  const formData = await context.request.formData()
  const password = String(formData.get("password"))
  const emailAddress = String(formData.get("email_address"))

  if (
    typeof emailAddress !== "string" ||
    emailAddress.length < 3 ||
    emailAddress.length > 31
  ) {
    return new Response("Invalid username", {
      status: 400,
    })
  }

  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
    return new Response("Invalid password", {
      status: 400,
    })
  }

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email_address, emailAddress))

  if (!existingUser) {
    // NOTE:
    // Returning immediately allows malicious actors to figure out valid usernames from response times,
    // allowing them to only focus on guessing passwords in brute-force attacks.
    // As a preventive measure, you may want to hash passwords even for invalid usernames.
    // However, valid usernames can be already be revealed with the signup page among other methods.
    // It will also be much more resource intensive.
    // Since protecting against this is none-trivial,
    // it is crucial your implementation is protected against brute-force attacks with login throttling etc.
    // If usernames are public, you may outright tell the user that the username is invalid.
    return new Response("Incorrect username or password", {
      status: 400,
    })
  }

  const validPassword = await new Argon2id().verify(
    existingUser[0].hashed_password,
    password
  )
  if (!validPassword) {
    return new Response("Incorrect username or password", {
      status: 400,
    })
  }

  const session = await lucia.createSession(existingUser[0].id, {})
  
  const sessionCookie = lucia.createSessionCookie(session.id)
  context.cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )

  return context.redirect("/")
}
