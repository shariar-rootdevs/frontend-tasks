'use client'
import { Product } from '@/type'
import { useEffect, useState } from 'react'

import Cart from './components/Cart'
import ProductList from './components/ProductList'

export default function Page() {
  const [product, setProduct] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    async function fetchData() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products?limit=15`, {
          signal: controller.signal,
        })
        if (!response.ok) {
          throw new Error('Failed to Fetch Data')
        }
        const data: Product[] = await response.json()
        setProduct(data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error?.message)
        } else {
          setError('Something Went Wrong')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => controller.abort()
  }, [])

  console.log('Products data', product)

  return (
    <div className='h-screen p-6 grid grid-cols-12 gap-4'>
      <div className='col-span-8 border-r-2 border-gray-400'>
        <ProductList product={product} loading={loading} error={error} />
      </div>

      <div className='col-span-4'>
        <Cart />
      </div>
    </div>
  )
}
