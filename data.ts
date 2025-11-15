import { CardItem } from './type'

export const cardData: CardItem[] = [
  {
    type: 'video',
    id: 'v1',
    title: 'Learn React in 10 Minutes',
    duration: 600,
    thumbnail: 'https://picsum.photos/id/1010/400/250',
    videoUrl: 'https://www.youtube.com/watch?v=Hu71rzAkwrM&t=1150s',
  },
  {
    type: 'article',
    id: 'a1',
    title: 'The Future of Frontend Development',
    author: 'John Doe',
    publishedAt: '2025-05-20',
    content: `Frontend is evolving rapidly with new frameworks, tools, and paradigms.  
Developers are moving towards component-driven architectures, server components, and static site generation.  
The rise of frameworks like React, Vue, and Svelte is shaping how we build user interfaces, making apps faster and more maintainable.`,
  },
  {
    type: 'image',
    id: 'i1',
    title: 'Beautiful Mountain — Nepal',
    imageUrl: 'https://picsum.photos/id/1003/500/300',
    caption: 'Captured on a hiking trip.',
  },
  {
    type: 'video',
    id: 'v2',
    title: 'Master TypeScript in 15 Minutes',
    duration: 900,
    thumbnail: 'https://picsum.photos/id/1025/400/250',
    videoUrl: 'https://www.youtube.com/watch?v=Hu71rzAkwrM&t=1150s',
  },
  {
    type: 'article',
    id: 'a2',
    title: 'Why Type Safety Matters',
    author: 'Sarah Khan',
    publishedAt: '2025-07-10',
    content: `Frontend is evolving rapidly with new frameworks, tools, and paradigms.  
Developers are moving towards component-driven architectures, server components, and static site generation.  
The rise of frameworks like React, Vue, and Svelte is shaping how we build user interfaces, making apps faster and more maintainable.`,
  },
  {
    type: 'image',
    id: 'i2',
    title: 'Ocean Sunset',
    imageUrl: 'https://picsum.photos/id/1040/500/300',
  },
]
