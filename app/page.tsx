'use client'
import { User } from '@/type'
import { useEffect, useState } from 'react'
import UserList from './components/UserList'
export default function Page() {
  const [userData, setUserData] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    async function fetchData() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
          signal: controller.signal,
        })
        if (!response.ok) {
          throw new Error('Failed to Fetch Data')
        }
        const data: User[] = await response.json()
        setUserData(data)
        console.log('data is', data)
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
      <UserList error={error} loading={loading} data={userData} />
    </div>
  )
}
