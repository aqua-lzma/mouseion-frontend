import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import Navbar from './navbar'
import BottomPlayer from './bottom-player'
import MainContent from './main-content'

function Root2 () {
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
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
  }, [])

  useEffect(() => {
    console.log('Audio changed')
  }, [audio.current])

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
  <React.StrictMode>
    <Root2/>
  </React.StrictMode>,
  document.getElementById('root')
)
