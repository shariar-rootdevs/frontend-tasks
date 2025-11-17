'use client'

import Image from 'next/image'

type MovieSearchCardPropsType = {
  imageUrl: string | null | undefined
  title: string
  release_date?: string
}

export default function MovieSearchCard({
  imageUrl,
  title,
  release_date,
}: MovieSearchCardPropsType) {
  const fallbackImage = `https://via.placeholder.com/50x75/cccccc/000000?text=${encodeURIComponent(
    title
  )}`

  return (
    <div className='flex gap-3 items-center p-2 rounded-md hover:bg-blue-50 cursor-pointer shadow-sm transition'>
      <Image
        src={imageUrl ? `https://image.tmdb.org/t/p/w200${imageUrl}` : fallbackImage}
        alt={title}
        height={50}
        width={50}
        className='rounded-md object-cover'
      />
      <div>
        <h2 className='text-lg font-semibold'>{title}</h2>
        <p className='text-sm text-gray-500'>{release_date ?? 'Unknown Release Date'}</p>
      </div>
    </div>
  )
}
