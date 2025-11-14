import { usersWithPostsType } from '@/type'
import { useState } from 'react'
import Error from './Error'
import Loading from './Loading'

type UserPostDataTypes = {
  data: usersWithPostsType[]
  loading: boolean
  error: string | null
}

export default function UsersPost({ data, loading, error }: UserPostDataTypes) {
  const [openAuthorId, setOpenAuthorId] = useState<number | null>(null)

  const toggleAccordion = (id: number) => {
    setOpenAuthorId(prev => (prev === id ? null : id))
  }

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (!loading && !error && data.length === 0)
    return <p className='text-center text-gray-500 mt-4'>No users found.</p>

  return (
    <div className='p-4 space-y-5'>
      <h3 className='text-3xl font-bold'>Users and Their Posts List</h3>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {data.map(user => {
          const { id, name, usersPost } = user
          const isOpen = openAuthorId === id

          return (
            <div
              key={id}
              className='bg-white shadow-lg rounded-2xl border border-blue-300 hover:shadow-xl transition-shadow duration-300 flex flex-col'
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(id)}
                aria-expanded={isOpen}
                aria-controls={`panel-${id}`}
                className='flex justify-between items-center p-5 cursor-pointer focus:outline-none'
              >
                <h2 className='text-xl font-semibold text-blue-700'>{name}</h2>

                <div className='flex items-center space-x-3'>
                  <span className='bg-blue-600 text-white px-3 py-1 rounded-full text-sm select-none'>
                    {usersPost.length}
                  </span>

                  {/* Chevron Icon */}
                  <svg
                    className={`w-5 h-5 text-blue-600 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-90' : ''
                    }`}
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7'></path>
                  </svg>
                </div>
              </button>

              {/* Accordion Body */}
              {isOpen && (
                <div
                  id={`panel-${id}`}
                  role='region'
                  aria-labelledby={`accordion-${id}`}
                  className='px-5 pb-5 space-y-3'
                >
                  {usersPost.length === 0 ? (
                    <p className='text-gray-500 italic'>No posts available.</p>
                  ) : (
                    usersPost.map(post => (
                      <div key={post.id} className='border rounded-lg p-3 bg-gray-50'>
                        <h3 className='font-semibold text-gray-900'>{post.title}</h3>
                        <p className='text-gray-700 text-sm mt-1'>{post.body}</p>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
