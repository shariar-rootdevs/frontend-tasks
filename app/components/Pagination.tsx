'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { getPageNumbers } from '../utils/paginationFunc'

type PaginationPropsType = {
  totalItems: number
  limit: number
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}
export default function Pagination({
  totalItems,
  limit,
  currentPage,
  setCurrentPage,
}: PaginationPropsType) {
  const pathName = usePathname()
  const currentParams = useSearchParams()
  const router = useRouter()

  // page calculation

  const maxAvailablePage = Math.ceil(totalItems / limit)
  console.log('Max Available Page number is', maxAvailablePage)

  const handleLimit = (value: string) => {
    const searchParams = new URLSearchParams(currentParams.toString())
    searchParams.set('limit', value)
    router.push(`${pathName}?${searchParams.toString()}`)
  }

  // function for increment one Page

  function handleIncrementPage() {
    if (currentPage + 1 > maxAvailablePage) {
      setCurrentPage(maxAvailablePage)
    } else {
      setCurrentPage(currentPage + 1)
    }
  }

  function handleDecremental() {
    if (currentPage - 1 <= 0) {
      setCurrentPage(1)
    } else {
      setCurrentPage(currentPage - 1)
    }
  }

  const limitValue = currentParams.get('limit') || '5'

  // In your component render
  const pageNumbers = getPageNumbers(currentPage, maxAvailablePage)

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
        <button
          disabled={currentPage === 1 ? true : false}
          onClick={() => setCurrentPage(1)}
          className={`px-3 py-1 ${
            currentPage === 1
              ? 'cursor-not-allowed bg-gray-200'
              : 'hover:bg-gray-100 cursor-pointer'
          } rounded-md border `}
        >
          «
        </button>
        <button
          disabled={currentPage === 1 ? true : false}
          onClick={handleDecremental}
          className={`px-3 py-1 ${
            currentPage === 1
              ? 'cursor-not-allowed bg-gray-200'
              : 'hover:bg-gray-100 cursor-pointer'
          } rounded-md border `}
        >
          ‹
        </button>

        <div className='flex gap-2'>
          {pageNumbers.map((page, idx) =>
            page === '...' ? (
              <span key={`dots-${idx}`} className='px-3 py-1'>
                ...
              </span>
            ) : (
              <button
                key={`page-${page}`}
                className={`px-3 py-1 rounded-md ${
                  page === currentPage ? 'bg-blue-600 text-white' : 'border hover:bg-gray-100'
                } cursor-pointer`}
                onClick={() => setCurrentPage(page as number)}
              >
                {page}
              </button>
            )
          )}
        </div>

        <button
          disabled={currentPage === maxAvailablePage ? true : false}
          onClick={handleIncrementPage}
          className={`px-3 py-1 ${
            currentPage === maxAvailablePage
              ? 'cursor-not-allowed bg-gray-200'
              : 'hover:bg-gray-100 cursor-pointer'
          } rounded-md border `}
        >
          ›
        </button>
        <button
          disabled={currentPage === maxAvailablePage ? true : false}
          onClick={() => setCurrentPage(maxAvailablePage)}
          className={`px-3 py-1 ${
            currentPage === maxAvailablePage
              ? 'cursor-not-allowed bg-gray-200'
              : 'hover:bg-gray-100 cursor-pointer'
          } rounded-md border `}
        >
          »
        </button>
      </div>
    </div>
  )
}
