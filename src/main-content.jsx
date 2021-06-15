/* eslint-env browser */

import { useEffect, useState, useRef } from 'react'

function Thumbnail (props) {
  const image = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entities) => {
      if (entities[0].isIntersecting) {
        image.current.src = 'https://picardia.co/static/papes/4b50dbaa-624e-11e7-b2fe-3a6e8f7c670f.jpg'
        image.current.addEventListener('load', () => {
          image.current.style.opacity = 1
        })
        observer.disconnect()
      }
    })
    observer.observe(image.current)
  }, [])

  return (
    <div
      className='thumbnail m-4 transition bg-gray-800 bg-opacity-60 hover:filter brightness-150 cursor-pointer'
      onClick={props.handleClick}
    >
      <img className='h-64 w-64 object-cover object-center opacity-0 transition-opacity' ref={image} />
      <p className='w-60 my-2 mx-auto text-xl text-center truncate'>{props.text}</p>
    </div>
  )
}

export default function MainContent () {
  const [mode, setMode] = useState('landing')

  return (
    <div className='bg-main py-12 md:py-20 min-h-screen'>
      <div className='mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-30 2xl:mx-40 space-y-4'>
        {{
          landing: (
            <>
              <h1 className='mx-4 pb-4 text-4xl border-b border-gray-200 border-opacity-70'>Mouseion tis Atmos</h1>
              <div className='flex flex-wrap justify-around'>
                <Thumbnail text='Labels' handleClick={() => setMode('labels')} />
                <Thumbnail text='Artists' handleClick={() => setMode('artists')} />
                <Thumbnail text='Albums' handleClick={() => setMode('albums')} />
                <Thumbnail text='Songs' handleClick={() => setMode('songs')} />
              </div>
            </>
          ),
          labels: (
            <>
              <h1 class='mx-4 pb-4 text-4xl border-b border-gray-200 border-opacity-70'>Labels</h1>
            </>
          ),
          artists: (
            <div>
              <h1 class='mx-4 pb-4 text-4xl border-b border-gray-200 border-opacity-70'>Labels</h1>
            </div>
          )
        }[mode]}
      </div>
    </div>
  )
}
