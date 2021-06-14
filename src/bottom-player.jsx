function VolumeIcon (props) {
  let path
  if (props.volume === 0) {
    path = <path d='M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z' />
  } else if (props.volume < 1 / 3) {
    path = <path d='M7 9v6h4l5 5V4l-5 5H7z' />
  } else if (props.volume < 2 / 3) {
    path = <path d='M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z' />
  } else {
    path = <path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z' />
  }
  return (
    <svg className='h-6' fill='#ffffff' viewBox='0 0 24 24' focusable='false'>{path}</svg>
  )
}

function RepeatIcon (props) {
  let path = <path d='M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z' />
  if (props.repeat === 2) path = <path d='M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z' />
  return (
    <svg className='h-6' fill={props.repeat === 0 ? '#999999' : '#ffffff'} viewBox='0 0 24 24' focusable='false'>{path}</svg>
  )
}

function PlayIcon (props) {
  let path = <path d='M6 19h4V5H6v14zm8-14v14h4V5h-4z' />
  if (props.paused) path = <path d='M8 5v14l11-7z' />
  return (
    <svg className='h-8 md:h-10' fill='#ffffff' viewBox='0 0 24 24' focusable='false'>{path}</svg>
  )
}

export default function BottomPlayer (props) {
  function handleChangeVol (event) {
    const newVol = Number(event.target.value) / 1000
    props.handleChangeVol(newVol)
  }

  function handleSeek (event) {
    const newSeek = Number(event.target.value) / 1000
    props.handleSeek(newSeek)
  }

  return (
    <div className='bg-gray-800 fixed inset-x-0 bottom-0 grid grid-cols-2 text-white'>
      {/* Main content */}
      <div className='flex items-center space-x-2 sm:mx-2 md:space-x-4'>
        {/* Album cover thumbnail, song name, artist name, album name, time stat */}
        <img className='h-10 w-10 object-cover object-center hidden md:block' src={props.albumCover} />
        <div className='text-sm overflow-hidden'>
          <p className='truncate cursor-pointer hover:underline select-none'><b>{props.songName}</b></p>
          <p className='truncate select-none'><span className='cursor-pointer hover:underline'>{props.artistName}</span> • <span className='cursor-pointer hover:underline'>{props.albumName}</span></p>
        </div><span className='whitespace-nowrap text-xs tracking-tighter hidden sm:block'>{props.timeStat}</span>
        <span className='whitespace-nowrap text-xs tracking-tighter hidden sm:block'>{props.currentTime} / {props.duration}</span>
      </div>
      <div className='flex items-center justify-end lg:space-x-2'>
        {/* Buttons */}
        {/* Volume slider */}
        <input
          className='volume-slider hidden sm:block'
          type='range' min='0' max='1000' defaultValue={props.volume * 1000}
          onChange={handleChangeVol}
        />
        {/* Volume button */}
        <div className='cursor-pointer p-1 md:p-2' onClick={props.handleToggleMute}>
          <VolumeIcon volume={props.volume} />
        </div>
        {/* Repeat button */}
        <div className='cursor-pointer hidden sm:block p-1 md:p-2' onClick={props.handleChangeRepeat}>
          <RepeatIcon repeat={props.repeat} />
        </div>
        {/* Shuffle button */}
        <div className='cursor-pointer hidden sm:block p-1 md:p-2' onClick={props.handleToggleShuffle}>
          <svg className='h-6' fill={props.shuffle ? '#ffffff' : '#999999'} viewBox='0 0 24 24' focusable='false'>
            <path d='M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z' />
          </svg>
        </div>
        {/* Queue button */}
        <div className='cursor-pointer hidden sm:block p-1 md:p-2' onClick={props.handleToggleQueue}>
          <svg className='h-6' fill='#ffffff' viewBox='0 0 24 24' focusable='false'>
            <path d='M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z' />
          </svg>
        </div>
        {/* Skip back button */}
        <div className='cursor-pointer hidden sm:block p-1 md:p-2' onClick={props.handleSkipBack}>
          <svg className='h-6' fill='#ffffff' viewBox='0 0 24 24' focusable='false'>
            <path d='M6 6h2v12H6zm3.5 6l8.5 6V6z' />
          </svg>
        </div>
        {/* Play / pause button */}
        <div className='cursor-pointer p-1 md:p-2' onClick={props.handleTogglePause}>
          <PlayIcon paused={props.paused} />
        </div>
        {/* Skip forward button */}
        <div className='cursor-pointer p-1 md:p-2' onClick={props.handleSkipFwd}>
          <svg className='h-6' fill='#ffffff' viewBox='0 0 24 24' focusable='false'>
            <path d='M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z' />
          </svg>
        </div>
        {/* Mobile view button button */}
        <div className='cursor-pointer sm:hidden p-1 md:p-2'>
          <svg className='h-6' fill='#ffffff' viewBox='0 0 24 24' focusable='false'>
            <path d='M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z' />
          </svg>
        </div>
      </div>
      {/* Seekbar */}
      <input
        className='w-full track-slider'
        type='range' min='0' max='1000'
        value={String(Math.floor((props.currentTime / props.duration) * 1000))}
        onChange={handleSeek}
      />
      {/* Album cover background */}
      <div className='absolute w-full h-full overflow-hidden' style={{ zIndex: -1 }}>
        <img
          className='w-full h-full object-cover object-center filter blur-2xl brightness-50'
          src={props.albumCover}
        />
      </div>
    </div>
  )
}
