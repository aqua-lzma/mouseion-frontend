import { useState, useEffect } from 'react'

import { firestore } from '../firebase'

import Thumbnail from '../generics/thumbnail'

export default function Artists () {
  const [list, setList] = useState([])
  // const [page, setPage] = useState(0)

  useEffect(async () => {
    const query = await firestore.collection('t3artists').orderBy('name').limit(100).get()
    setList(query.docs)
  }, [])

  return (
    <>
      <h1 className='text-3xl pb-4 border-b border-gray-600 border-opacity-70'>Artists</h1>
      <div className='flex flex-wrap'>
        {list.map((v, i) => {
          return <Thumbnail key={i} text={v.data().name} to={`/artist/${v.id}`} />
        })}
      </div>
    </>
  )
}
