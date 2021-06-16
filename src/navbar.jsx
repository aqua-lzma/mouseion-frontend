import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar (props) {
  const [search, setSearch] = useState('')

  return (
    <div className='bg-nav fixed inset-x-0 top-0 px-2 lg:py-1 grid grid-cols-3 items-center'>
      <Link className='text-xl' to='/'>蒸気<span className='hidden sm:inline'><span className='text-gray-300'>の</span>博物館</span></Link>
      <h1 className='hidden truncate text-xl'>господи как же хочется тян</h1>
      <div className='flex my-2'>
        <input
          className='appearance-none bg-transparent border rounded-l-sm border-white border-opacity-50 placeholder-white placeholder-opacity-70 px-1 lg:px-2 w-full'
          placeholder='Search'
          onChange={(event) => setSearch(event.target.value)}
        />
        <Link to={`/search/${search}`} className='cursor-pointer py-1.5 px-2 lg:px-3 border border-l-0 rounded-r-sm border-white border-opacity-50'>
          <svg className='h-5' fill='rgba(255, 255, 255, 0.7)' viewBox='0 0 24 24' focusable='false'>
            <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
          </svg>
        </Link>
      </div>
      <div className='flex justify-self-end space-x-2 md:space-x-4'>
        <Link className='p-1 hidden sm:block' to='/labels'>
          <svg className='h-6' fill='#ffffff' viewBox='0 0 24 24' focusable='false'>
            <path d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' />
          </svg>
        </Link>
        <Link className='p-1 hidden sm:block' to='/artists'>
          <svg className='h-6' fill='#ffffff' viewBox='0 0 24 24' focusable='false'>
            <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
          </svg>
        </Link>
        <Link className='p-1 hidden sm:block' to='/albums'>
          <svg className='h-6' fill='#ffffff' viewBox='0 0 24 24' focusable='false'>
            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z' />
          </svg>
        </Link>
        <Link className='p-1 hidden sm:block' to='/songs'>
          <svg className='h-6' fill='#ffffff' viewBox='0 0 24 24' focusable='false'>
            <path d='M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z' />
          </svg>
        </Link>
        <Link className='p-1' to='/settings'>
          <svg className='h-6' fill='#ffffff' viewBox='0 0 24 24' focusable='false'>
            <path d='M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z' />
          </svg>
        </Link>
      </div>
    </div>
  )
}
