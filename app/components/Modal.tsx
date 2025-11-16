'use client'
import { useEffect } from 'react'
type ModalProps = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

export default function Modal({ children, setShow }: ModalProps) {
  useEffect(() => {
    function CloseModalOnKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setShow(false)
      }
    }
    window.addEventListener('keydown', CloseModalOnKey)

    return () => {
      window.removeEventListener('keydown', CloseModalOnKey)
    }
  }, [setShow])

  return (
    <div
      onClick={() => setShow(false)}
      className='fixed inset-0 bg-black/50 flex justify-center items-center'
    >
      {children}
    </div>
  )
}
