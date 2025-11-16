'use client'

import { Product } from '@/type'
import { useEffect, useState } from 'react'
import TableComponent from './components/TableComponent'
export default function Page() {
  const [product, setProduct] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    async function fetchData() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products?limit=10`, {
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

  return (
    <div className='h-screen justify-center p-6'>
      <h2 className='text-xl font-bold mb-2'>Product Table : </h2>
      <TableComponent error={error} data={product} loading={loading} />
    </div>
  )
}
