import { Post } from '@/api/post'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  post: Post
}

export default function PostCard({post}: Props) {
  return (
    <Link href={`/posts/${post.path}`}>
      <article className='rounded-md overflow-hidden shadow-lg m-2 '>
        <Image className='width-full m-auto' src={`/images/posts/${post.path}.png`} alt='image' width={300} height={200}/>
        <div className='flex flex-col items-center p-4'>
          <time className='self-end text-sm'> {post.date.toString()} </time>
          <h3 className='text-lg font-bold'>{post.title}</h3>
          <p className='w-full truncate text-center'>{post.description}</p>
          <span className='text-sm rounded-lg bg-green-200 p-2 my-2'>{post.category}</span>
        </div>
      </article>
    </Link>
  )
}

