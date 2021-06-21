/* eslint-env browser */
import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Thumbnail (props) {
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
