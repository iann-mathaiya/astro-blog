
import Button from "./Button"
import FormInput from "./FormInput"
import type { FormEvent } from "react"

export default function LoginForm() {
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const response = await fetch("/api/login", {
      method: "POST",
      body: formData,
    })
    const data = await response.json()

    console.log(data)
  }

  return (
    <form
      onSubmit={submit}
      className='px-5 my-16 flex flex-col items-center space-y-4'
    >
      <h1>Login</h1>

      <FormInput name='email_address' label='Email Address' type='email' />
      <FormInput name='password' label='Password' type='password' />

      <Button type='submit'>Continue</Button>
    </form>
  )
}