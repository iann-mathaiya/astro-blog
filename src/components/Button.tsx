type ButtonProps = {
  type: "button" | "submit" | "reset"
  children: React.ReactNode
}

export default function Button({ type, children }: ButtonProps) {
  return (
    <button
      type={type}
      className='w-2/4 inline-flex justify-center rounded-none border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-orange-500 focus:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 focus-visible:ring-offset-2 transition-colors'
    >
      {children}
    </button>
  )
}
