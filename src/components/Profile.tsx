import React from 'react'
import Image from 'next/image'
import profileImage from '../../public/images/profileImage.png'
import Link from 'next/link'


export default function Profile() {
  return (
    <section className='text-center'>
      <Image 
        className='mx-auto'
        src={profileImage} alt='author' width={250} height={250}/>
      <h2 className='text-3xl font-bold mt-2'>한대희</h2>
      <h3 className='text-xl font-semibold'>Front-End Engineer</h3>
      <Link href='/contact'>
        <button className='bg-green-300 rounded-xl p-2'>Contact Me</button>
      </Link>
    </section>
  )
}

