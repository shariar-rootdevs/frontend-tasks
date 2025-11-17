'use client'

import { Product } from '@/type'
import { useEffect, useState } from 'react'

import Cart from './components/Cart'
import ProductList from './components/ProductList'

type CartAction = 'add' | 'remove'

export default function Page() {
  const [product, setProduct] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [cartProduct, setCartProducts] = useState<Product[]>([])

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
          setError(error.message)
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

  function handleCartAction(id: number, type: CartAction) {
    if (type === 'add') {
      const findProduct = cartProduct.find(p => p.id === id)
      if (!findProduct) {
        const targetProduct = product.find(p => p.id === id)
        if (targetProduct) {
          setCartProducts(prev => [...prev, targetProduct])
        }
      }
    } else if (type === 'remove') {
      setCartProducts(prev => prev.filter(p => p.id !== id))
    }
  }

  return (
    <div className='h-screen p-6 grid grid-cols-12 gap-4'>
      <div className='col-span-8 border-r-2 border-gray-400 overflow-y-auto'>
        <ProductList
          product={product}
          loading={loading}
          error={error}
          cartProduct={cartProduct}
          onAddToCart={handleCartAction}
        />
      </div>

      <div className='col-span-4 overflow-y-auto max-h-screen'>
        <Cart cartProduct={cartProduct} onAddToCart={handleCartAction} />
      </div>
    </div>
  )
}
