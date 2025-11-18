'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function Pagination() {
  const pathName = usePathname()
  const currentParams = useSearchParams()
  const router = useRouter()

  const handleLimit = (value: string) => {
    const searchParams = new URLSearchParams(currentParams.toString())
    searchParams.set('limit', value)
    router.push(`${pathName}?${searchParams.toString()}`)
  }

  const limitValue = currentParams.get('limit') || '5'

  return (
    <div className='w-full rounded-xl shadow-md bg-white p-5 flex justify-between items-center'>
      {/* Left: Per Page */}
      <div className='flex items-center gap-x-3'>
        <p className='text-gray-700 font-medium'>Per Page</p>
        <select
          value={limitValue}
          onChange={e => handleLimit(e.target.value)}
          className='w-20 border border-gray-300 px-2 py-1 rounded-md 
                     bg-gray-50 hover:bg-gray-100 cursor-pointer 
                     focus:outline-none focus:ring-2 focus:ring-blue-300'
        >
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
        </select>
      </div>

      {/* Right: Buttons (UI only for now) */}
      <div className='flex items-center gap-2'>
        <button className='px-3 py-1 rounded-md border hover:bg-gray-100 cursor-pointer'>«</button>
        <button className='px-3 py-1 rounded-md border hover:bg-gray-100 cursor-pointer'>‹</button>

        <button className='px-3 py-1 rounded-md bg-blue-600 text-white cursor-pointer'>1</button>
        <button className='px-3 py-1 rounded-md border hover:bg-gray-100 cursor-pointer'>2</button>
        <button className='px-3 py-1 rounded-md border hover:bg-gray-100 cursor-pointer'>3</button>

        <button className='px-3 py-1 rounded-md border hover:bg-gray-100 cursor-pointer'>›</button>
        <button className='px-3 py-1 rounded-md border hover:bg-gray-100 cursor-pointer'>»</button>
      </div>
    </div>
  )
}
