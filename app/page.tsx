'use client'
import { useState } from 'react'
import Modal from './components/Modal'

type PropsType = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header = ({ setShow }: PropsType) => (
  <div className='flex justify-between items-center border-b pb-2'>
    <p className='font-semibold text-lg'>Modal Title</p>
    <button
      onClick={() => setShow(false)}
      className='text-gray-500 hover:text-black font-bold text-md cursor-pointer'
    >
      ×
    </button>
  </div>
)

export const Body = () => (
  <div className='text-gray-700 border-b pb-3'>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aut rem expedita tenetur eius
      neque atque, quasi excepturi eligendi in nesciunt accusantium.
    </p>
  </div>
)

export const Footer = ({ setShow }: PropsType) => (
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
)

export default function Page() {
  const [show, setShow] = useState<boolean>(false)
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='space-y-10'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit voluptatibus iusto
          facere sint numquam omnis magnam debitis. Nihil maiores voluptate reiciendis architecto
          alias quod. Reprehenderit eligendi porro a, repellat recusandae tenetur, quo ex, nesciunt
          enim maxime voluptas consequatur saepe dicta ipsum dolor autem corrupti quaerat eos itaque
          rerum aut amet sit. Ipsum fuga similique, facilis cupiditate aliquam, quis sit rem quia
          tempore nemo minima ab non id. Quo ex natus eius quaerat, deleniti aperiam illo porro
          repellendus neque blanditiis cum quae rem quia veniam suscipit dignissimos delectus.
          Laudantium dolore sed porro quidem totam ratione quo. Earum, doloremque qui omnis
          dignissimos libero iste quas asperiores illo consectetur, sapiente aliquam soluta optio
          unde magnam atque ducimus? Dignissimos error adipisci rem facere neque tempore fugit, ex
          sunt laudantium blanditiis earum vero odit maiores dolorum magni culpa nemo veritatis, est
          officia nam? Sed, expedita facere quod magnam quam, sapiente aperiam quaerat
          necessitatibus ducimus, animi voluptatum culpa inventore harum accusamus doloremque
          excepturi assumenda molestias! Neque, cum ullam corrupti quibusdam commodi consequatur,
          quaerat mollitia fugit, rerum numquam cupiditate. Enim expedita mollitia a dignissimos
          perspiciatis voluptate, quam quo esse hic distinctio, dolore id sit facilis saepe sapiente
          tempora modi repellat, animi nostrum dolorum eveniet explicabo aspernatur.
        </p>
        <button
          onClick={() => setShow(true)}
          className='px-4 py-2 bg-blue-500 text-white font-medium rounded-md cursor-pointer'
        >
          Open
        </button>
      </div>

      {show && (
        <Modal setShow={setShow}>
          <div
            onClick={e => e.stopPropagation()}
            className='bg-white rounded-lg shadow-lg space-y-3 p-5 w-full max-w-lg'
          >
            {/* Header */}
            <Header setShow={setShow} />

            {/* Body */}

            <Body />

            {/* Footer */}

            <Footer setShow={setShow} />
          </div>
        </Modal>
      )}
    </div>
  )
}
