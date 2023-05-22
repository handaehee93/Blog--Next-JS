
import { getNoneFeaturedPost } from '@/api/post'
import React from 'react'
import PostCard from './PostCard'
import MultiCarousel from './MultiCarousel'


export default async function CarouselPost() {
  const posts = await getNoneFeaturedPost()
  return (
      <section className='my-2'>
        <h2>Like Post</h2>
        <MultiCarousel>
            {
              posts.map((post) => (
                  <PostCard key={post.path} post={post}/>
                ))
            }
        </MultiCarousel>
      </section>
    )
  }












