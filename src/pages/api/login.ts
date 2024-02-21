import type { APIContext } from "astro"
import { Argon2id } from "oslo/password"

import { eq } from "drizzle-orm"
import { db } from "../../db/drizzle"
import { lucia } from "../../lib/auth"
import { users } from "../../db/schema"

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

  const existingUser = await db.query.users.findFirst({
    where: eq(users.email_address, emailAddress),
  })

  if (!existingUser) {
    return new Response(
      JSON.stringify({
        message: "User does not exit",
        status: 401,
      })
    )
  }

  const validPassword = await new Argon2id().verify(
    existingUser.hashed_password,
    password
  )
  if (!validPassword) {
    return new Response(
      JSON.stringify({
        message: "Incorrect password",
        status: 400,
      })
    )
  }

  const session = await lucia.createSession(existingUser.id, {})

  const sessionCookie = lucia.createSessionCookie(session.id)
  context.cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )

  return context.redirect('/store')

}
