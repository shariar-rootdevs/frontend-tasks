import { Heart, Share2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

type CartAction = 'add' | 'remove'

type ProductCardProps = {
  id: number
  title: string
  image: string
  description: string
  price: number
  isCartItem?: boolean
  onAddToCart: (id: number, type: CartAction) => void
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
  const [wishlistActive, setWishlistActive] = useState(false)

  function handleShare() {
    alert(`Share this product: ${title}`)
  }

  function toggleWishlist() {
    setWishlistActive(prev => !prev)
  }

  return (
    <div className='bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition p-3'>
      {/* Image Section */}
      <div className='relative h-[260px] w-full'>
        <Image src={image} alt={title} fill className='object-contain p-4' priority />

        {/* Wishlist Button */}
        <button
          aria-label={wishlistActive ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={toggleWishlist}
          className={`absolute top-3 right-3 rounded-full p-2 shadow-md transition-transform cursor-pointer hover:scale-110 bg-white ${
            wishlistActive ? 'text-red-500' : 'text-gray-600'
          }`}
        >
          <Heart
            className='w-5 h-5'
            fill={wishlistActive ? 'red' : 'none'}
            stroke={wishlistActive ? 'red' : '#666'}
          />
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
            aria-label={`Share ${title}`}
          >
            <Share2 className='w-4 h-4' />
            Share
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(id, isCartItem ? 'remove' : 'add')}
          className={`w-full py-2 mt-3 rounded-lg font-semibold text-white shadow-sm transition hover:shadow
            ${
              isCartItem
                ? 'bg-red-500 hover:bg-red-600 active:bg-red-700'
                : 'bg-green-500 hover:bg-green-600 active:bg-green-700'
            }
          `}
          aria-label={isCartItem ? 'Remove from cart' : 'Add to cart'}
        >
          {isCartItem ? 'Remove From Cart' : 'Add To Cart'}
        </button>
      </div>
    </div>
  )
}
