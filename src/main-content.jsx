/* eslint-env browser */
import { useState, useEffect, useRef } from 'react'
import { Switch, Route, Link, useParams } from 'react-router-dom'

import { firebaseInstance, firestore } from './firestore'

function Thumbnail (props) {
  const image = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entities) => {
      if (entities[0].isIntersecting) {
        if (props.image != null) {
          image.current.src = props.image
        } else {
          image.current.src = 'https://picardia.co/static/papes/4b50dbaa-624e-11e7-b2fe-3a6e8f7c670f.jpg'
        }
        image.current.addEventListener('load', () => {
          image.current.style.opacity = 1
        })
        observer.disconnect()
      }
    })
    observer.observe(image.current)
  }, [])

  return (
    <Link
      className='m-2 transition bg-gray-800 bg-opacity-60 hover:filter brightness-150 p-2 hover:bg-gray-400 hover:text-gray-800'
      to={props.to == null ? '#' : props.to}
      title={props.text}
    >
      <img className='w-40 h-40 object-cover object-center opacity-0 transition-opacity delay-1000' ref={image} />
      <p className='w-40 text-xl text-center truncate'>{props.text}</p>
    </Link>
  )
}

function Home () {
  return <h1>Home</h1>
}

function Artists () {
  const [list, setList] = useState([])
  // const [page, setPage] = useState(0)

  useEffect(async () => {
    const query = await firestore.collection('t2artists').orderBy('name').limit(100).get()
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

function Artist (props) {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [list, setList] = useState([])

  useEffect(async () => {
    const docs = await firestore.collection('t2artists').where(firebaseInstance.firestore.FieldPath.documentId(), '==', id).get()
    if (docs.size === 0) {
      setName('Artist not found.')
    } else {
      const doc = docs.docs[0]
      setName(doc.get('name'))
      const albums = await firestore.collectionGroup('track-artists').where('ref', '==', doc.ref).get()
      const listData = []
      for (const doc of albums.docs) {
        const album = await doc.ref.parent.parent.get()
        listData.push(album)
      }
      setList(listData)
    }
  }, [])

  return (
    <>
      <h1 className='text-3xl pb-4 border-b border-gray-600 border-opacity-70'>{name}</h1>
      <div className='flex flex-wrap'>
        {list.map((v, i) => {
          return <Thumbnail key={i} text={v.data().title} image={`https://picardia.co/mouseion/images/${v.data().artwork[0]}`} />
        })}
      </div>
    </>
  )
}

export default function MainContent () {
  return (
    <div className='bg-main py-16 lg:py-20 min-h-screen'>
      <div className='mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-30 2xl:mx-40 space-y-4'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/labels'>
            <Home />
          </Route>
          <Route exact path='/artists'>
            <Artists />
          </Route>
          <Route exact path='/albums'>
            <Home />
          </Route>
          <Route exact path='/songs'>
            <Home />
          </Route>
          <Route exact path='/artist/:id'>
            <Artist />
          </Route>
          <Route exact path='/album/:id'>
            <Home />
          </Route>
          <Route exact path='/search'>
            <Home />
          </Route>
          <Route exact path='/settings'>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
