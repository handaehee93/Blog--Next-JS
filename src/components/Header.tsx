import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='flex justify-between items-center p-3'>
      <Link href='/'>
        <h1 className='text-3xl font-extrabold text-green-300'>{"DaeHee's Blog"}</h1>
      </Link>
      <nav className='flex gap-5 font-bold text-xl'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/post'>Post</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  )
}


