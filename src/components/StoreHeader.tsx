import type { User } from "lucia"
import LogoutForm from "./LogoutForm"
import { LogOutIcon, ShoppingCartIcon } from "lucide-react"

export default function StoreHeader({ user }: { user: User | null }) {
  return (
    <div className='px-5 my-4 flex items-center justify-between'>
      <h1 className='text-sm text-gray-500'>Starlight Store</h1>
      {user && (
        <div>
          <a
            href='/cart'
            className='text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded'
          >
            <ShoppingCartIcon size={18} />
          </a>
          <LogoutForm />
        </div>
      )}
    </div>
  )
}
