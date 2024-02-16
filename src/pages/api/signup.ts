import { generateId } from "lucia"
import { Argon2id } from "oslo/password"

import type { APIContext } from "astro"
import { lucia } from "../../lib/auth"
import { db } from "../../db/drizzle"
import { users } from "../../db/schema"

export async function POST(context: APIContext): Promise<Response> {
  const formData = await context.request.formData()
  const username = String(formData.get("username"))
  const emailAddress = String(formData.get("email_address"))
  const password = String(formData.get("password"))

  if (
    typeof username !== "string" ||
    username.length < 3 ||
    username.length > 31 
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

  const userId = generateId(15)
  const hashedPassword = await new Argon2id().hash(password)

  await db
    .insert(users)
    .values(
      {
        id: userId,
        username: username,
        email_address: emailAddress,
        hashed_password: hashedPassword,
      }
    )

  const session = await lucia.createSession(userId, {})
  const sessionCookie = lucia.createSessionCookie(session.id)
  context.cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )

  return context.redirect("/")
}
