import { useState, useEffect, useRef, StrictMode } from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import Navbar from './navbar'
import BottomPlayer from './bottom-player'
import MainContent from './main-content'

function formatTime (currentTime, duration) {
  if (isNaN(currentTime)) currentTime = 0
  if (isNaN(duration)) duration = 0
  const currentHours = String(Math.floor(currentTime / 3600))
  const currentSeconds = String(Math.floor(currentTime) % 60).padStart(2, 0)
  const durationHours = String(Math.floor(duration / 3600))
  const durationSeconds = String(Math.floor(duration) % 60).padStart(2, 0)
  let currentMinutes = String(Math.floor(currentTime / 60) % 60)
  let durationMinutes = String(Math.floor(duration / 60) % 60)
  if (duration >= 600) {
    currentMinutes = currentMinutes.padStart(2, 0)
    durationMinutes = durationMinutes.padStart(2, 0)
  }
  let curStr = `${currentMinutes}:${currentSeconds}`
  let durStr = `${durationMinutes}:${durationSeconds}`
  if (duration >= 3600) {
    curStr = `${currentHours}:` + curStr
    durStr = `${durationHours}:` + durStr
  }
  return `${curStr} / ${durStr}`
}

function Root () {
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [timeStat, setTimeStat] = useState('')
  const [volume, setVolume] = useState(1)
  const [oldVolume, setOldVolume] = useState(1)
  const [repeat, setRepeat] = useState(0)
  const [shuffle, setShuffle] = useState(false)
  const [paused, setPaused] = useState(true)
  const audio = useRef(null)

  // Init event
  useEffect(() => {
    audio.current.src = 'https://picardia.co/mouseion/songs/f3b7681372e8f95117aef9388590a3942f0bc64d.mp3'
    audio.current.addEventListener('timeupdate', () => {
      setCurrentTime(audio.current.currentTime)
    })
    audio.current.addEventListener('durationchange', () => {
      setDuration(audio.current.duration)
    })
    setInterval(() => {
      setTimeStat(formatTime(audio.current.currentTime, audio.current.duration))
    }, 1000)
  }, [])

  function changeVol (newVol) {
    audio.current.volume = newVol
    setVolume(newVol)
    setOldVolume(newVol)
  }
  function toggleMute () {
    if (volume !== 0) {
      audio.current.volume = 0
      setOldVolume(volume)
      setVolume(0)
    } else {
      audio.current.volume = oldVolume
      setVolume(oldVolume)
    }
  }
  function changeRepeat () {
    setRepeat((repeat + 1) % 3)
  }
  function toggleShuffle () {
    setShuffle(!shuffle)
  }
  function togglePause () {
    if (paused) {
      audio.current.play()
    } else {
      audio.current.pause()
    }
    setPaused(!paused)
  }
  function seek (timeFrac) {
    const newTime = timeFrac * duration
    audio.current.currentTime = newTime
  }

  return (
    <>
      <audio ref={audio} />
      <Navbar />
      <BottomPlayer
        albumCover='https://picardia.co/static/papes/4b50dbaa-624e-11e7-b2fe-3a6e8f7c670f.jpg'
        songName='Song Name'
        artistName='Artist Name'
        albumName='Album Name'
        timeStat={timeStat}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        repeat={repeat}
        shuffle={shuffle}
        paused={paused}
        handleChangeVol={changeVol}
        handleToggleMute={toggleMute}
        handleChangeRepeat={changeRepeat}
        handleToggleShuffle={toggleShuffle}
        handleTogglePause={togglePause}
        handleSeek={seek}
      />
      <MainContent />
    </>
  )
}

ReactDOM.render(
  <StrictMode>
    <Root />
  </StrictMode>,
  document.getElementById('root')
)