import ReactPlayer from 'react-player'
type VideoCardProps = {
  title: string
  videoUrl: string
}
export default function VideoCard({ title, videoUrl }: VideoCardProps) {
  return (
    <div className='rounded-md shadow-md  hover:-translate-y-0.5 cursor-pointer  duration-300  ease-in-out w-full'>
      <div>
        <div className='relative h-80'>
          <ReactPlayer
            width='100%'
            height='100%'
            controls={true}
            src={videoUrl || 'https://www.youtube.com/watch?v=Hu71rzAkwrM&t=1150s'}
          />
        </div>
      </div>

      <div className='p-3'>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </div>
  )
}
