import type { User } from "lucia"
import Button from "../components/Button"
import type { CollectionEntry } from "astro:content"

type ProductProps = {
  user: User | null
  product: CollectionEntry<"products">
}

export default function Product({ user, product }: ProductProps) {
  function addToCart() {
    if (!user) {
      return window.location.href = '/login'
    }
  }

  return (
    <section className='px-5 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4'>
      <div className='aspect-square overflow-hidden'>
        <img
          className='aspect-square object-contain object-center hover:scale-125 transition-all ease-in-out duration-500 delay-150'
          src={product.data.imageSrc}
          alt={`Image of the ${product.data.name}`}
        />
      </div>

      <div className='space-y-6 sm:space-y-10'>
        <div className='flex items-center justify-between'>
          <h1 className='text-base text-gray-500 font-medium'>
            {product.data.name}
          </h1>
          <h2 className='text-2xl text-gray-800 font-semibold group-hover:text-orange-500 transition-colors'>
            ${product.data.price}
          </h2>
        </div>

        <p className='text-sm text-balance text-gray-500'>
          {product.data.description}
        </p>

        <Button onClick={addToCart}>Add to cart</Button>
      </div>
    </section>
  )
}
