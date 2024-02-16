import Button from "./Button"
import FormInput from "./FormInput"

export default function SignUpForm() {
  return (
    <form
      method='post'
      action='/api/signup'
      className='px-5 my-16 flex flex-col items-center space-y-4'
    >
      <h1>Sign up</h1>

      <FormInput name='username' label='Username' />
      <FormInput name='email_address' label='Email Address' type='email' />
      <FormInput name='password' label='Password' type='password' />

      <Button type='submit'>Continue</Button>
    </form>
  )
}
