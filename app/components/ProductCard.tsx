import Image from 'next/image'

type ProductCardProps = {
  title: string
  image: string
  description: string
  price: number
}
export default function ProductCard({ title, image, description, price }: ProductCardProps) {
  return (
    <div className='min-w-lg bg-white shadow-md rounded-lg '>
      <div className='h-[300px] relative'>
        <Image alt='productImg' src={image} fill objectFit='contain' objectPosition='center' />
      </div>
      <div className='p-3 space-y-3'>
        <h2 className='font-bold text-lg'>{title}</h2>
        <p className='text-md font-medium'>{description}</p>
        <p className='text-sm font-semibold'>Price : {price}$ </p>
      </div>
    </div>
  )
}
