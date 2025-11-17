'use client'
import { ReactNode, useEffect, useRef, useState } from 'react'

interface TooltipProps {
  children: ReactNode
  content?: ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
  className?: string
}

const Tooltip = ({
  children,
  content = 'Tooltip content',
  position = 'top',
  delay = 300,
  className = '',
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDelayed, setIsDelayed] = useState(false)

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const tooltipRef = useRef<HTMLDivElement | null>(null)

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDelayed(true)
    }, delay)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsDelayed(false)
    setIsVisible(false)
  }

  useEffect(() => {
    if (isDelayed) setIsVisible(true)
  }, [isDelayed])

  const positionClasses: Record<string, string> = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
  }

  const arrowClasses: Record<string, string> = {
    top: 'top-full left-1/2 transform -translate-x-1/2 border-t-black border-l-transparent border-r-transparent border-b-transparent',
    bottom:
      'bottom-full left-1/2 transform -translate-x-1/2 border-b-black border-l-transparent border-r-transparent border-t-transparent',
    left: 'left-full top-1/2 transform -translate-y-1/2 border-l-black border-t-transparent border-b-transparent border-r-transparent',
    right:
      'right-full top-1/2 transform -translate-y-1/2 border-r-black border-t-transparent border-b-transparent border-l-transparent',
  }

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {isVisible && (
        <div
          ref={tooltipRef}
          className={`absolute z-50 px-3 py-2 text-sm text-white bg-black rounded-md shadow-lg whitespace-nowrap ${positionClasses[position]}`}
          role='tooltip'
        >
          {content}
          <div className={`absolute w-0 h-0 border-4 ${arrowClasses[position]}`} />
        </div>
      )}
    </div>
  )
}

export default Tooltip
