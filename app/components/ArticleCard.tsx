type ArticleCardProps = {
  title: string
  publishedAt: string
  content: string
}

export default function ArticleCard({ title, publishedAt, content }: ArticleCardProps) {
  return (
    <div className='rounded-md shadow-md hover:-translate-y-0.5 duration-300 cursor-pointer ease-in-out w-full'>
      <div>
        <div className='relative h-80 p-3'>
          <p>{content}</p>
        </div>
      </div>

      <div className='p-3 border-t border-gray-200'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p className='text-md text-gray-500'>{publishedAt || ''}</p>
      </div>
    </div>
  )
}
