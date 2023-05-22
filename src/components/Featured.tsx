import { getFeaturedPost } from '@/api/post'
import React from 'react'
import PostCard from './PostCard'


export default async function Featured() {
  const posts= await getFeaturedPost()
  // console.log(posts)
  return (
    <section >
      <h2 className='text-2xl font-bold my-2'>Featured</h2>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4'>
        {
          posts.map((post) => (
            <li key={post.path}>
              <PostCard post={post}/>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
