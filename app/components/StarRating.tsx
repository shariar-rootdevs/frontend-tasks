'use client'

import { Star } from 'lucide-react'
import { useState } from 'react'

export default function StarRating() {
  const [starRating, setStarRating] = useState([
    { id: 1, isFilled: false },
    { id: 2, isFilled: false },
    { id: 3, isFilled: false },
    { id: 4, isFilled: false },
    { id: 5, isFilled: false },
  ])

  const [hoverRating, setHoverRating] = useState(0) // hover রেটিং

  function handleFill(id: number) {
    setStarRating(prev =>
      prev.map(star => ({
        ...star,
        isFilled: star.id <= id,
      }))
    )
  }

  // বর্তমান রেটিং যা ইউজার দেখবে, hover থাকলে hover রেটিং দেখাবে, নাহলে ক্লিক করা রেটিং
  // const currentRating = hoverRating || starRating.filter(star => star.isFilled).length

  const currentRating = hoverRating || starRating.filter(star => star.isFilled).length

  return (
    <div className='flex gap-2'>
      {starRating.map(star => (
        <Star
          key={star.id}
          className='cursor-pointer transition-colors duration-200'
          onClick={() => handleFill(star.id)}
          stroke='none'
          onMouseEnter={() => setHoverRating(star.id)}
          onMouseLeave={() => setHoverRating(0)}
          fill={star.id <= currentRating ? '#FFD700' : '#999'}
          // onMouseEnter={() => setHoverRating(star.id)}
          // onMouseLeave={() => setHoverRating(0)}
          // fill={star.id <= currentRating ? '#FFD700' : '#999'}
        />
      ))}
    </div>
  )
}
