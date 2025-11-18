import { Post } from '@/type'
import Error from './Error'
import Loading from './Loading'
import Pagination from './Pagination'
import PostCard from './PostCard'

type PostListType = {
  posts: Post[]
  loading: boolean
  error: string | null
  totalItems: number
  limit: number
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export default function PostList({
  posts,
  loading,
  error,
  totalItems,
  limit,
  currentPage,
  setCurrentPage,
}: PostListType) {
  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (!loading && !error && posts.length === 0)
    return <p className='text-center text-gray-500 mt-4'>No users found.</p>

  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        {posts.map(post => (
          <PostCard key={post.id} title={post.title} body={post.body} />
        ))}
      </div>

      <Pagination
        totalItems={totalItems}
        limit={limit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}
