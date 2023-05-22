
import { readFile } from 'fs/promises'
import path from 'path'

export type Post = {
  title: string,
  description: string,
  date: Date,
  category: string,
  path: string,
  featured: boolean
}

// 데이터 전체를 불러오는 함수
export async function getPost ():Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json')
  return readFile(filePath, 'utf-8')
  // then도 promise를 리턴하기 때문에 타입을 지정을 해줘야 다음 then에서 값을 사용할 수 있다.
    .then<Post[]>(data => JSON.parse(data))
    .then(post => post.sort((a,b) => a.date > b.date ? -1 : 1))
}

// getPost로 데이터 전체를 가져 와서 featured가 true인 것만 리턴 하는 함수
export async function getFeaturedPost ():Promise<Post[]> {
  return (
    getPost()
      .then(posts => posts.filter(post => post.featured))
)
}

// getPost로 데이터 전체를 가져 와서 featured가 false인 것만 리턴 하는 함수
export async function getNoneFeaturedPost ():Promise<Post[]> {
  return (
    getPost()
      .then(posts => posts.filter(post => !post.featured))
)
}
  



