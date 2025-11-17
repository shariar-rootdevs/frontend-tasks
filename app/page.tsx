'use client'
import Tooltip from './components/Tooltip'

export default function Page() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div>
        <Tooltip content='This is tooltip text' position='top'>
          <button className='px-6 py-2 bg-blue-500 text-white font-bold rounded-md cursor-pointer'>
            view
          </button>
        </Tooltip>

        {/* triangle pointing UP */}
        <div
          className='w-0 h-0 border-l-[16px] border-r-[16px] border-b-[24px]
                      border-l-transparent border-r-transparent border-b-black'
        />
      </div>
    </div>
  )
}
