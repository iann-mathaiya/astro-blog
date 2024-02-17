import type { CollectionEntry } from "astro:content"

type ProductProps = {
    product: CollectionEntry<"products">
  }

export default function ProductCard({ product }: ProductProps) {
  return (
    <li className='group border border-gray-100'>
      <a href={`/products/${product.id}/`}>
        <div className=' aspect-square overflow-hidden'>
          <img
            className='aspect-square object-contain object-center group-hover:scale-125 transition-all ease-in-out duration-500 delay-150'
            src={product.data.imageSrc}
            alt={`Image of the ${product.data.name}`}
          />
        </div>

        <div className='p-2 flex items-center justify-between'>
          <h1 className='text-xs text-gray-500'>{product.data.name}</h1>
          <h2 className='text-xs text-gray-700 font-semibold group-hover:text-orange-500 transition-colors'>
            ${product.data.price}
          </h2>
        </div>
      </a>
    </li>
  )
}
