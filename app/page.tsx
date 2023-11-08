import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col gap-5 p-4  border border-white rounded-lg'>
      <h1>NextJS + TypeScript Basics</h1>
      <Link className='bg-red-800 py-2 px-4 text-white hover:bg-red-500' href="/useState">useState + useEffect</Link>
      <Link className='bg-red-800 py-2 px-4 text-white hover:bg-red-500' href="/useReducer">useReducer</Link>
      <Link className='bg-red-800 py-2 px-4 text-white hover:bg-red-500' href="/useContext">useContext</Link>
    </main>
  )
}
