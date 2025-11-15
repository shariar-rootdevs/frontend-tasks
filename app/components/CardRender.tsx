import { CardItem } from '@/type'
import ArticleCard from './ArticleCard'
import ImageCard from './ImageCard'
import VideoCard from './VideoCard'

type CardRenderProps = {
  cardData: CardItem[]
}

export default function CardRender({ cardData }: CardRenderProps) {
  console.log('This is the values in Card Render Components', cardData)
  return (
    <div className='space-y-3 w-full'>
      <h2 className='text-3xl font-bold text-center'>All Cards</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  min-w-full'>
        {cardData.map(data => {
          const { type } = data
          if (type === 'image') {
            return (
              <ImageCard
                key={data.id}
                title={data.title}
                caption={data.caption}
                imageUrl={data.imageUrl}
              />
            )
          } else if (type == 'article') {
            return (
              <ArticleCard
                key={data.id}
                title={data.title}
                publishedAt={data.publishedAt}
                content={data.content}
              />
            )
          } else {
            return <VideoCard key={data.id} title={data.title} videoUrl={data.videoUrl} />
          }
        })}
      </div>
    </div>
  )
}
