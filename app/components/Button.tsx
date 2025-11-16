import clsx from 'clsx'

type ButtonProps = {
  buttonText: string
  variant: 'primary' | 'secondary' | 'danger' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  handleFunction?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({
  buttonText,
  variant,
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  handleFunction,
}: ButtonProps) {
  let sizeClasses = ''

  switch (size) {
    case 'sm':
      sizeClasses = 'px-2 py-1 text-sm'
      break
    case 'md':
      sizeClasses = 'px-4 py-2 text-base'
      break
    case 'lg':
      sizeClasses = 'px-6 py-3 text-lg'
      break
    case 'xl':
      sizeClasses = 'px-8 py-4 text-xl'
      break
  }

  const buttonCls = clsx('rounded-md ease duration-500 hover:translate-y-0.5', sizeClasses, {
    'cursor-not-allowed opacity-50 hover:translate-y-0 hover:bg-none bg-gray-400':
      disabled || loading,
    'cursor-pointer bg-blue-500 text-white hover:bg-blue-400':
      variant === 'primary' && !disabled && !loading,
    'cursor-pointer bg-gray-500 text-white hover:bg-gray-400':
      variant === 'secondary' && !disabled && !loading,
    'cursor-pointer bg-red-500 text-white hover:bg-red-400':
      variant === 'danger' && !disabled && !loading,
    'cursor-pointer border border-blue-200 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white':
      variant === 'outline' && !disabled && !loading,
    'w-full': fullWidth,
  })

  const spinnerColor = variant === 'outline' ? 'border-blue-500' : 'border-white'

  return (
    <div>
      <button
        onClick={handleFunction}
        disabled={disabled || loading}
        className={buttonCls}
        aria-busy={loading}
      >
        <div className='flex gap-1 items-center justify-center'>
          {buttonText}
          {loading && (
            <div
              className={`h-5 w-5 border-2 ${spinnerColor} border-t-transparent border-solid rounded-full animate-spin`}
            ></div>
          )}
        </div>
      </button>
    </div>
  )
}
