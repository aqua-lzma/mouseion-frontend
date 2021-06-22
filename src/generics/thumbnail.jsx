/* eslint-env browser */
import { Link } from 'react-router-dom'

import ImageLoad from './image-load'

export default function Thumbnail (props) {
  return (
    <Link
      className='m-2 transition bg-gray-800 bg-opacity-60 hover:filter brightness-150 p-2 hover:bg-gray-400 hover:text-gray-800'
      to={props.to == null ? '#' : props.to}
      title={props.text}
    >
      <ImageLoad className='w-40 h-40 object-cover object-center opacity-0 transition-opacity delay-1000' image={props.image} />
      <p className='w-40 text-xl text-center truncate'>{props.text}</p>
    </Link>
  )
}
