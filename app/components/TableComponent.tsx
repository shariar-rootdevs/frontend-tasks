import { Product } from '@/type'
import Image from 'next/image'
import Error from './Error'
import Loading from './Loading'
import Pagination from './Pagination'
type TableComponentProps = {
  loading: boolean
  error: string | null
  data: Product[]
}

export default function TableComponent({ loading, error, data }: TableComponentProps) {
  console.log('data is', data)

  return (
    <div>
      <div className='overflow-x-auto rounded-lg shadow'>
        <table className='min-w-full bg-white'>
          <thead>
            <tr className='bg-gray-50 border-b'>
              <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider'>
                Id
              </th>
              <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider'>
                Title
              </th>
              <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider'>
                Image
              </th>
              <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider'>
                Price
              </th>
              <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider'>
                Description
              </th>
              <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider'>
                Category
              </th>
              <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider'>
                Rating
              </th>
            </tr>
          </thead>

          <tbody className='text-gray-700 text-sm'>
            {loading ? (
              <tr>
                <td colSpan={12} className='px-6 py-10 '>
                  <div className='flex justify-center items-center w-full h-full'>
                    <Loading />
                  </div>
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={12} className='px-6 py-4 text-center text-red-500'>
                  <Error error={error} />
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={12} className='px-6 py-4 text-center text-gray-500'>
                  No products found.
                </td>
              </tr>
            ) : (
              data.map(t => (
                <tr
                  key={t.id}
                  className='odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition'
                >
                  <td className='px-6 py-4 font-medium'>{t.id || 'N/A'}</td>

                  <td className='px-6 py-4'>{t.title || 'N/A'}</td>

                  <td className='px-6 py-4'>
                    <div className='h-14 w-14 rounded-md  flex items-center justify-center text-sm '>
                      <Image
                        src={t.image || 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png'}
                        alt='no-image'
                        height={160}
                        width={80}
                      />
                    </div>
                  </td>

                  <td className='px-6 py-4 font-semibold text-gray-900'>${t.price || 0}</td>

                  <td className='px-6 py-4 max-w-xs text-gray-600 line-clamp-2'>
                    {t.description || ''}
                  </td>

                  <td className='px-6 py-4'>{t.category || ''}</td>

                  <td className='px-6 py-4 font-semibold'> {t.rating.rate || 2} ⭐</td>
                </tr>
              ))
            )}
            <tr className='w-full'>
              <td colSpan={12}>
                <Pagination />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
