// type PaginationProps = {
//   totalPages: number
//   onPageChange: (page: number) => void
// }

export default function Pagination() {
  // const [currentPage, setCurrentPage] = useState(1)

  function goToFirstPage() {
    // if (currentPage !== 1) {
    //   setCurrentPage(1)
    //   onPageChange(1)
    // }
  }

  function goToPreviousPage() {
    // if (currentPage > 1) {
    //   setCurrentPage(prev => {
    //     const newPage = prev - 1
    //     onPageChange(newPage)
    //     return newPage
    //   })
    // }
  }

  function goToNextPage() {
    // if (currentPage < totalPages) {
    //   setCurrentPage(prev => {
    //     const newPage = prev + 1
    //     onPageChange(newPage)
    //     return newPage
    //   })
    // }
  }

  function goToLastPage() {
    // if (currentPage !== totalPages) {
    //   setCurrentPage(totalPages)
    //   onPageChange(totalPages)
    // }
  }

  return (
    <div className='w-full border-t border-gray-200 shadow-md bg-gray-50 p-5 rounded-md'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-2'>
          <label htmlFor='select' className='text-gray-700 font-medium'>
            Show
          </label>
          <select
            id='select'
            name='select'
            className='cursor-pointer rounded border border-gray-300 bg-white px-3 py-1 text-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition duration-150 ease-in-out'
            // You can add onChange handler here if needed
          >
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='20'>20</option>
          </select>
        </div>

        <div className='flex space-x-3'>
          <button
            onClick={goToFirstPage}
            className='h-10 w-10 rounded-md shadow-sm text-xl flex justify-center items-center
              cursor-pointer bg-white hover:bg-blue-100 active:bg-blue-200
              transition duration-200 ease-in-out
              text-gray-700 hover:text-blue-600 disabled:cursor-not-allowed disabled:text-gray-300'
            aria-label='Go to first page'
            // disabled={currentPage === 1}
          >
            {'<<'}
          </button>

          <button
            onClick={goToPreviousPage}
            className='h-10 w-10 rounded-md shadow-sm text-xl flex justify-center items-center
              cursor-pointer bg-white hover:bg-blue-100 active:bg-blue-200
              transition duration-200 ease-in-out
              text-gray-700 hover:text-blue-600 disabled:cursor-not-allowed disabled:text-gray-300'
            aria-label='Go to previous page'
            // disabled={currentPage === 1}
          >
            {'<'}
          </button>

          <button
            onClick={goToNextPage}
            className='h-10 w-10 rounded-md shadow-sm text-xl flex justify-center items-center
              cursor-pointer bg-white hover:bg-blue-100 active:bg-blue-200
              transition duration-200 ease-in-out
              text-gray-700 hover:text-blue-600 disabled:cursor-not-allowed disabled:text-gray-300'
            aria-label='Go to next page'
            // disabled={currentPage === totalPages}
          >
            {'>'}
          </button>

          <button
            onClick={goToLastPage}
            className='h-10 w-10 rounded-md shadow-sm text-xl flex justify-center items-center
              cursor-pointer bg-white hover:bg-blue-100 active:bg-blue-200
              transition duration-200 ease-in-out
              text-gray-700 hover:text-blue-600 disabled:cursor-not-allowed disabled:text-gray-300'
            aria-label='Go to last page'
            // disabled={currentPage === totalPages}
          >
            {'>>'}
          </button>
        </div>
      </div>
    </div>
  )
}
