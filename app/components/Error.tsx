interface ErrorResponse {
  error: string
}

export default function Error({ error }: ErrorResponse) {
  return (
    <div>
      <p className='text-red-500'>{error}</p>
    </div>
  )
}
