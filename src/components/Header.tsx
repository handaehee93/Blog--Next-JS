import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header>
      <Link href='/'>
        <h1>{"DaeHee's Blog"}</h1>
      </Link>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/post'>Post</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  )
}


