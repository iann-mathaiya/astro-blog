import type { APIContext } from "astro"
import { lucia } from "../../lib/auth"

export async function POST(context: APIContext): Promise<Response> {
  if (!context.locals.session) {
    return new Response(
      JSON.stringify({
        message: "no auth session to log out",
        status: 401,
      })
    )
  }

  await lucia.invalidateSession(context.locals.session.id)

  const sessionCookie = lucia.createBlankSessionCookie()
  context.cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )

  return new Response(
    JSON.stringify({
      message: "logged out successfully",
      status: 200,
    })
  )
}
