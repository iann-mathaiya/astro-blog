import type { User } from "lucia"
import LogoutForm from "./LogoutForm"

export default function StoreHeader({user}: {user: User}) {
  return (
    <div className='px-5 my-4 flex items-center justify-between'>
      <h1 className='text-sm text-gray-500'>Starlight Store</h1>
      <div>{user && <LogoutForm />}</div>
    </div>
  )
}
