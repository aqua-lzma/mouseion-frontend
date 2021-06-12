import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import Navbar from './navbar'
import BottomPlayer from './bottom-player'
import MainContent from './main-content'

class Root extends React.Component {
  constructor (props) {
    super(props)
    this.audio = new Audio()
    this.audio.src = 'https://picardia.co/mouseion/songs/f3b7681372e8f95117aef9388590a3942f0bc64d.mp3'
    this.audio.addEventListener('timeupdate', () => {
      this.setState({ currentTime: this.audio.currentTime })
    })
    this.audio.addEventListener('durationchange', () => {
      this.setState({ duration: this.audio.duration })
    })
    this.state = {
      currentTime: 0,
      duration: 0,
      volume: 1,
      oldVolume: 1,
      loop: 0,
      shuffle: false,
      paused: true
    }
  }

  changeVol = (event) => {
    const newVol = Number(event.target.value) / 1000
    this.setState({ volume: newVol, oldVolume: newVol }, () => {
      this.audio.volume = newVol
    })
  }

  toggleMute = () => {
    if (this.state.volume !== 0) {
      this.setState({ volume: 0, oldVolume: this.state.volume }, () => {
        this.audio.volume = 0
      })
    } else {
      this.setState({ volume: this.state.oldVolume }, () => {
        this.audio.volume = this.state.oldVolume
      })
    }
  }

  toggleLoop = () => {
    this.setState({ loop: (this.state.loop + 1) % 3 })
  }

  toggleShuffle = () => {
    this.setState({ shuffle: !this.state.shuffle })
  }

  togglePause = () => {
    this.setState({ paused: !this.state.paused }, () => {
      if (this.audio.paused) {
        this.audio.play()
      } else {
        this.audio.pause()
      }
    })
  }

  seek = (event) => {
    const newTime = (Number(event.target.value) / 1000) * this.audio.duration
    this.audio.currentTime = newTime
  }

  render () { return (<>
    <Navbar/>
    <BottomPlayer
      currentTime={this.state.currentTime}
      duration={this.state.duration}
      volume={this.state.volume}
      changeVol={this.changeVol}
      toggleMute={this.toggleMute}
      loop={this.state.loop}
      toggleLoop={this.toggleLoop}
      shuffle={this.state.shuffle}
      toggleShuffle={this.toggleShuffle}
      paused={this.state.paused}
      togglePause={this.togglePause}
      seek={this.seek}
    />
    <MainContent/>
  </>) }
}

ReactDOM.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
  document.body
)
