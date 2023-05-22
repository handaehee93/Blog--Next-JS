import { getNoneFeaturedPost } from '@/api/post'
import React from 'react'
import PostCard from './PostCard'

export default async function Carousel() {
  const posts = await getNoneFeaturedPost()
  return (
    <section>
      Carousel
      {
        posts.map((post) => (
          <PostCard key={post.path} post={post}/>
        ))
      }
    </section>
  )
}
