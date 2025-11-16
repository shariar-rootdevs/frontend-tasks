import Button from './components/Button'

export default function Page() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button Clicked', event)
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='space-y-3'>
        <Button
          handleFunction={handleClick}
          buttonText='Click'
          variant='secondary'
          size='lg'
          disabled={true}
        />
        <Button
          handleFunction={handleClick}
          buttonText='Click'
          variant='primary'
          size='lg'
          loading
        />
        <Button handleFunction={handleClick} buttonText='Click' variant='danger' size='lg' />
        <Button handleFunction={handleClick} buttonText='Click' variant='outline' size='lg' />

        <div className='h-[500px] w-[600px] border border-gray-200 p-4'>
          <Button handleFunction={handleClick} buttonText='Click' variant='primary' fullWidth />
        </div>
      </div>
    </div>
  )
}
