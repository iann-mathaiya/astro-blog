type ButtonProps = {
  children: React.ReactNode
  type?: "button" | "submit" | "reset"
}

export default function Button({ type="button", children }: ButtonProps) {
  return (
    <button
      type={type}
      className='w-2/4 inline-flex justify-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-orange-500 focus:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 focus-visible:ring-offset-2 transition-colors'
    >
      {children}
    </button>
  )
}
