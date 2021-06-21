import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { firestore, firebase } from '../firebase'
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
    }
  }, [])

  return (
    <>
      <img className='w-40 h-40 object-cover object-center opacity-0 transition-opacity delay-1000' src='https://picardia.co/static/papes/4b50dbaa-624e-11e7-b2fe-3a6e8f7c670f.jpg' />
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
