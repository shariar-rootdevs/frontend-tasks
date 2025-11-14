import { User } from '@/type'
import Error from './Error'
import Loading from './Loading'
import UserCard from './UserCard'
interface UserListResponse {
  data: User[]
  error: string | null
  loading: boolean
}
export default function UserList({ data, error, loading }: UserListResponse) {
  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error error={error} />
  }

  if (!loading && !error && data.length === 0) {
    return <p className='text-center text-gray-500 mt-4'>No users found.</p>
  }

  return (
    <div>
      <h2 className='text-3xl font-bold text-center mb-2'>User Lists : </h2>
      <div className='grid grid-cols-1  md:grid-cols-3 gap-3'>
        {data?.map(d => {
          const {
            name,
            email,
            phone,
            company: { name: companyName },
          } = d
          return (
            <UserCard
              key={d.id}
              name={name || ''}
              email={email || ''}
              phone={phone || ''}
              companyName={companyName || ''}
            />
          )
        })}
      </div>
    </div>
  )
}
