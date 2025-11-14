interface UserCardProps {
  name: string
  email: string
  phone: string
  companyName: string
}
export default function UserCard({ name, email, phone, companyName }: UserCardProps) {
  return (
    <div className='bg-white shadow-lg rounded-2xl p-5 border border-blue-300 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center space-y-3'>
      <h2 className='text-xl font-semibold text-blue-700'>{name}</h2>
      <p className='text-gray-700'>
        <strong>Email:</strong> {email}
      </p>
      <p className='text-gray-700'>
        <strong>Phone:</strong> {phone}
      </p>
      <p className='text-gray-700'>
        <strong>Company:</strong> {companyName}
      </p>
    </div>
  )
}
