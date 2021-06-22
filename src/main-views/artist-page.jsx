import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { firestore, firebase } from '../firebase'
import ImageLoad from '../generics/image-load'
import Thumbnail from '../generics/thumbnail'

export default function Artist (props) {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [groups, setGroups] = useState([])
  const [aliases, setAliases] = useState([])
  const [variants, setVariants] = useState([])
  const [releaseAlbums, setReleaseAlbums] = useState([])
  const [releaseEPs, setReleaseEPs] = useState([])
  const [releaseSingles, setReleaseSingles] = useState([])
  const [releaseCompilations, setReleaseCompilations] = useState([])
  const [releaseMixes, setReleaseMixes] = useState([])
  const [trackAlbums, setTrackAlbums] = useState([])
  const [trackEPs, setTrackEPs] = useState([])
  const [trackSingles, setTrackSingles] = useState([])
  const [trackCompilations, setTrackCompilations] = useState([])
  const [trackMixes, setTrackMixes] = useState([])
  const [featureAlbums, setFeatureAlbums] = useState([])
  const [featureEPs, setFeatureEPs] = useState([])
  const [featureSingles, setFeatureSingles] = useState([])
  const [featureCompilations, setFeatureCompilations] = useState([])
  const [featureMixes, setFeatureMixes] = useState([])

  useEffect(async () => {
    const artistDocs = await firestore.collection('t3artists').where(firebase.firestore.FieldPath.documentId(), '==', id).get()
    if (artistDocs.size === 0) {
      setName('Artist not found.')
    } else {
      const artistDoc = artistDocs.docs[0]
      setName(artistDoc.get('name'))
      // Groups
      // Aliases
      // Variants
      const tempVariants = []
      for (const variantDoc of artistDoc.get('variants')) {
        tempVariants.push(await variantDoc.get())
      }
      setVariants(tempVariants)
    }
  }, [])

  return (
    <>
      <ImageLoad className='h-64 w-64 float-left' />
      <h1 className='text-3xl pb-4 border-b border-gray-600 border-opacity-70'>{name}</h1>
      <p className=''>Variants:{
        variants.map((v, i) => {
          return (
            <button key={i}>{v.get('name')}</button>
          )
        })
      }
      </p>
      <div className='flex flex-wrap'>
        {releaseAlbums.map((v, i) => {
          return <Thumbnail key={i} text={v.data().title} image={`https://picardia.co/mouseion/images/${v.data().artwork[0]}`} />
        })}
      </div>
    </>
  )
}
