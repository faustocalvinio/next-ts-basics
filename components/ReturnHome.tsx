import Link from 'next/link'

export const ReturnHome = () => {
  return (
    <Link className='bg-red-800 py-2 px-4 text-white hover:bg-red-500' href="/">Home</Link>
  )
}
