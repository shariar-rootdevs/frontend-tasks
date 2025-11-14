'use client'

import { Post, User, usersWithPostsType } from '@/type'
import { useEffect, useState } from 'react'
import UsersPost from './components/UsersPost'

export default function Page() {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [users, setUsers] = useState<User[]>([])
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const controller = new AbortController()

    async function fetchData() {
      try {
        const [userRes, postRes] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/users`, {
            signal: controller.signal,
          }),
          fetch(`https://jsonplaceholder.typicode.com/posts`, {
            signal: controller.signal,
          }),
        ])

        if (!userRes.ok || !postRes.ok) {
          throw new Error('Failed to fetch Data')
        }

        const [usersData, postsData] = await Promise.all([userRes.json(), postRes.json()])
        setUsers(usersData)
        setPosts(postsData)
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

  console.log('All users data is', users)
  console.log('All Posts Data are', posts)

  const usersWithPosts: usersWithPostsType[] = users.map(user => {
    const usersPost = posts
      .filter(post => post.userId === user.id)
      .map(({ id, title, body }) => ({ id, title, body }))

    return {
      id: user.id,
      name: user.name,
      userName: user.username,
      usersPost,
    }
  })

  console.log('Users with post is', usersWithPosts)

  return (
    <div className='h-screen justify-center p-6'>
      <UsersPost data={usersWithPosts} loading={loading} error={error} />
    </div>
  )
}
