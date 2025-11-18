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

  const currentSearchParams = useSearchParams()

  useEffect(() => {
    const currentLimit = new URLSearchParams(currentSearchParams.toString()).get('limit')
    if (currentLimit) setLimit(parseInt(currentLimit))
  }, [currentSearchParams])

  useEffect(() => {
    const controller = new AbortController()

    async function fetchData() {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`, {
          signal: controller.signal,
        })
        const data = await res.json()
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
  }, [limit])

  return (
    <div className='h-screen p-3 space-y-3'>
      <p className='text-2xl font-bold'>Users Posts</p>
      <PostList posts={posts} error={error} loading={loading} />
    </div>
  )
}
