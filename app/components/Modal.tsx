type ModalProps = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({ setShow }: ModalProps) {
  return (
    <div className='fixed inset-0 bg-black/50 flex justify-center items-center'>
      <div className='bg-white rounded-lg shadow-lg space-y-3 p-5 w-full max-w-lg'>
        {/* Header */}
        <div className='flex justify-between items-center border-b pb-2'>
          <p className='font-semibold text-lg'>Modal Title</p>
          <button
            onClick={() => setShow(false)}
            className='text-gray-500 hover:text-black font-bold'
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className='text-gray-700 border-b pb-3'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aut rem expedita tenetur
            eius neque atque, quasi excepturi eligendi in nesciunt accusantium.
          </p>
        </div>

        {/* Footer */}
        <div className='flex justify-end gap-3 pt-2'>
          <button className='px-4 py-2 bg-red-500 text-white font-medium rounded-md min-w-32 cursor-pointer'>
            Cancel
          </button>

          <button
            onClick={() => setShow(false)}
            className='px-4 py-2 bg-green-500 text-white font-medium rounded-md min-w-32 cursor-pointer'
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}
