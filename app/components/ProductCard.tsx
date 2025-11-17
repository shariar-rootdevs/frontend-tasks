import { Heart, Share2 } from 'lucide-react'
import Image from 'next/image'

type ProductCardProps = {
  id: number
  title: string
  image: string
  description: string
  price: number
  isCartItem?: boolean
  onAddToCart: (id: number, type: string) => void
}

export default function ProductCard({
  id,
  title,
  image,
  description,
  price,
  onAddToCart,
  isCartItem = false,
}: ProductCardProps) {
  function handleShare() {
    alert(`Share this product: ${title}`)
  }

  return (
    <div className='bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition p-3'>
      {/* Image Section */}
      <div className='relative h-[260px] w-full'>
        <Image src={image} alt={title} fill className='object-contain p-4' />

        <button className='absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:scale-110 transition cursor-pointer'>
          <Heart className='w-5 h-5' fill='white' stroke='#666' />
        </button>
      </div>

      {/* Content */}
      <div className='space-y-2 px-2 pb-3'>
        <h2 className='font-semibold text-lg line-clamp-1'>{title}</h2>

        <p className='text-gray-600 text-sm line-clamp-2'>{description}</p>

        <div className='flex justify-between items-center pt-2'>
          <p className='text-lg font-bold text-green-600'>${price}</p>

          <button
            onClick={handleShare}
            className='flex items-center gap-1 text-sm text-blue-600 hover:underline cursor-pointer'
          >
            <Share2 className='w-4 h-4' /> Share
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(id, isCartItem ? 'remove' : 'add')}
          className={`
            cursor-pointer
            w-full 
            text-white 
            py-2 
            rounded-lg 
            mt-3 
            font-semibold
            ${
              isCartItem
                ? 'bg-red-500 hover:bg-red-600 active:bg-red-700   '
                : 'bg-green-500 hover:bg-green-600 active:bg-green-700   '
            } 
            
            
            
            transition 
            shadow-sm 
            hover:shadow
          `}
        >
          {isCartItem ? 'Remove From Cart' : 'Remove From Cart '}
        </button>
      </div>
    </div>
  )
}
