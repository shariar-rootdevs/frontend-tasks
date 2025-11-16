type ButtonProps = {
  buttonText: string
  variant: 'primary' | 'secondary' | 'danger' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Button({ buttonText, variant, size = 'md' }: ButtonProps) {
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

  let buttonCls = `rounded-md px-4 py-2 bg-blue-400 cursor-pointer ${sizeClasses}`
  switch (variant) {
    case 'primary':
      buttonCls +=
        ' bg-blue-500 text-white text-lg hover:bg-blue-400 hover:translate-y-0.5 ease duration-500'
      break
    case 'secondary':
      buttonCls +=
        ' bg-gray-500 text-white text-lg hover:bg-gray-400 hover:translate-y-0.5 ease duration-500'
      break
    case 'danger':
      buttonCls +=
        ' bg-red-500 text-white text-lg hover:bg-red-400 hover:translate-y-0.5 ease duration-500'
      break
    case 'outline':
      buttonCls +=
        ' border border-blue-200 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white hover:translate-y-0.5 ease duration-500'
      break
    default:
      buttonCls +=
        ' bg-blue-500 text-white text-lg hover:bg-blue-400 hover:translate-y-0.5 ease duration-500'
      break
  }
  return (
    <div>
      <button className={`${buttonCls}`}>{buttonText}</button>
    </div>
  )
}
