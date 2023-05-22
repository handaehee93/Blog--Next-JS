import Carousel from '@/components/Carousel'
import Featured from '@/components/Featured'
import Profile from '@/components/Profile'
import Image from 'next/image'
export default function Home() {
  return (
    <main className='text-3xl '>
      <Profile />
      {/* @ts-expect-error Async Server Component */}
      <Featured />
      <Carousel />
    </main>
  )
}

