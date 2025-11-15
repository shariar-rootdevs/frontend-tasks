'use client'
import { cardData } from '@/data'
import { useState } from 'react'
import CardRender from './components/CardRender'
export default function Page() {
  const [data] = useState(cardData)
  console.log(data)
  return (
    <div className='flex h-screen justify-center p-8 '>
      <CardRender cardData={data} />
    </div>
  )
}
