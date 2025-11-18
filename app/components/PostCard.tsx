type PostCardProps = {
  title: string
  body: string
}

export default function PostCard({ title, body }: PostCardProps) {
  return (
    <div
      className='
      bg-white 
      p-5 
      rounded-xl 
      shadow-lg 
      hover:shadow-xl 
      transition 
      duration-300 
      ease-out
      cursor-pointer
    '
    >
      <h2 className='font-semibold text-xl mb-2 text-gray-900'>{title}</h2>

      <p className='text-gray-600 leading-relaxed'>{body}</p>
    </div>
  )
}
