import Image from 'next/image'

type ImageCardProps = {
  title: string
  imageUrl: string
  caption: string | undefined
}

export default function ImageCard({ caption, imageUrl, title }: ImageCardProps) {
  return (
    <div className='rounded-md shadow-md  hover:-translate-y-0.5 cursor-pointer  duration-300  ease-in-out w-full'>
      <div>
        {/* <img
          src='https://picsum.photos/id/1003/500/300'
          alt='alternativeImage'
          className='w-full object-center'
        /> */}
        <div className='relative h-80'>
          <Image
            src={imageUrl || 'https://picsum.photos/id/1003/1600/1000'}
            alt='alternativeImage'
            fill
            className='object-cover object-center'
          />
        </div>
      </div>

      <div className='p-3'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p className='text-md text-gray-500'>{caption || ''}</p>
      </div>
    </div>
  )
}
