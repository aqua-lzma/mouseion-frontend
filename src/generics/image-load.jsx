/* eslint-env browser */
import { useEffect, useRef } from 'react'

export default function ImageLoad (props) {
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
    <img {...props} ref={image} />
  )
}
