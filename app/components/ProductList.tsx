import { Product } from '@/type'
import Error from './Error'
import Loading from './Loading'
import ProductCard from './ProductCard'
type ProductListPropsType = {
  product: Product[]
  loading: boolean
  error: string | null
  cartProduct: Product[]
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>
  onAddToCart: (id: number, type: string) => void
}
export default function ProductList({
  product,
  loading,
  error,
  onAddToCart,
}: ProductListPropsType) {
  if (error) {
    return <Error error={error} />
  }

  if (loading) {
    return <Loading />
  }

  if (!loading && !error && product.length === 0)
    return <p className='text-center text-gray-500 mt-4'>No Product found.</p>

  return (
    <div className=''>
      <p className='text-lg font-bold'>Product List</p>
      <div className='mt-3 grid grid-cols-1 xl:grid-cols-2 gap-4'>
        {product.map(p => (
          <ProductCard
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
    </div>
  )
}
