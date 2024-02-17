import Button from "./Button"
import FormInput from "./FormInput"
import { type FormEvent } from "react"

export default function LoginForm() {
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const response = await fetch("/api/login", {
      method: "POST",
      body: formData,
    })
    // const result = await response.json()

    if (response.status === 200) return (window.location.href = "/store")
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
        
        <a href="/signup" className='text-sm text-gray-500 underline underline-offset-2 hover:text-orange-500'>Create Account</a>
      </form>

  )
}
