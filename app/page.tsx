'use client'

import { Post } from '@/type'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import PostList from './components/PostList'

export default function Page() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [limit, setLimit] = useState(10)
  const [totalItems, setTotalItems] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const currentSearchParams = useSearchParams()

  useEffect(() => {
    const currentLimit = new URLSearchParams(currentSearchParams.toString()).get('limit')
    if (currentLimit) setLimit(parseInt(currentLimit))
  }, [currentSearchParams])

  useEffect(() => {
    const controller = new AbortController()

    async function fetchData() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${currentPage}`,
          {
            signal: controller.signal,
          }
        )
        const data = await res.json()
        const totalCount = res.headers.get('x-total-count') // string
        if (totalCount) {
          setTotalItems(Number(totalCount))
        }

        setPosts(data)
      } catch (err) {
        if (err instanceof Error) setError(err.message)
        else setError('Something Went Wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => controller.abort()
  }, [limit, currentPage])

  console.log('Total numbers are', totalItems)

  return (
    <div className='h-screen p-3 space-y-3'>
      <p className='text-2xl font-bold'>Users Posts</p>
      <PostList
        totalItems={totalItems}
        limit={limit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        posts={posts}
        error={error}
        loading={loading}
      />
    </div>
  )
}
