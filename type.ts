export type VideoCardType = {
  type: 'video'
  id: string
  title: string
  duration: number
  thumbnail: string
  videoUrl: string
}

export type ArticleCardType = {
  type: 'article'
  id: string
  title: string
  author: string
  publishedAt: string
  content: string
}

export type ImageCardType = {
  type: 'image'
  id: string
  title: string
  imageUrl: string
  caption?: string
}

export type CardItem = VideoCardType | ArticleCardType | ImageCardType
