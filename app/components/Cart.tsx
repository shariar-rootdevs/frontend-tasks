import { Product } from '@/type'
import ProductCard from './ProductCard'

type CartProductProps = {
  cartProduct: Product[]
  onAddToCart: (id: number, type: 'add' | 'remove') => void
}

export default function Cart({ cartProduct, onAddToCart }: CartProductProps) {
  return (
    <div className='max-h-[90vh] overflow-y-auto'>
      <p className='text-lg font-bold'>Cart Items</p>

      {cartProduct.length > 0 ? (
        <div className='mt-3 grid grid-cols-1 gap-4'>
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
        <p className='text-red-400 font-bold mt-3'>No Items in Cart</p>
      )}
    </div>
  )
}
