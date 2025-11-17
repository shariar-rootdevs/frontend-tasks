import { Product } from '@/type'
import ProductCard from './ProductCard'

type CartProductProps = {
  cartProduct: Product[]
  onAddToCart: (id: number, type: string) => void
}
export default function Cart({ cartProduct, onAddToCart }: CartProductProps) {
  return (
    <div className=''>
      <p className='text-lg font-bold'>Cart Item</p>

      <div>
        {cartProduct && cartProduct.length > 0 ? (
          <div className='mt-3 grid grid-cols-1  gap-4'>
            {cartProduct.map(p => (
              <ProductCard
                isCartItem
                key={p.id}
                id={p.id}
                title={p.title}
                image={p.image}
                description={p.description}
                price={p.price}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div>
            <p className='text-red-400 font-bold'>No Items in Cart</p>
          </div>
        )}
      </div>
    </div>
  )
}
