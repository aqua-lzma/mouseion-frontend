import React from 'react'

import {
  DrawerUpIcon,
  PauseIcon,
  PlayIcon,
  QueueIcon,
  RepeatIcon,
  Repeat1Icon,
  ShuffleIcon,
  StepBackIcon,
  StepFwdIcon,
  VolumeOffIcon,
  VolumeLowIcon,
  VolumeMedIcon,
  VolumeHighIcon
} from './icons'

class TimeStat extends React.Component {
  render () {
    const cur = this.props.currentTime
    let dur = this.props.duration
    if (isNaN(dur)) dur = 0
    const ch = String(Math.floor(cur / 3600))
    let cm = String(Math.floor(cur / 60) % 60)
    if (dur >= 600) cm = cm.padStart(2, 0)
    const cs = String(Math.floor(cur) % 60).padStart(2, 0)
    const dh = String(Math.floor(dur / 3600))
    const dm = String(Math.floor(dur / 60) % 60)
    if (dur >= 600) dm = dm.padStart(2, 0)
    const ds = String(Math.floor(dur) % 60).padStart(2, 0)
    let curStr = `${cm}:${cs}`
    let durStr = `${dm}:${ds}`
    if (dur >= 3600) {
      curStr = `${ch}:` + curStr
      durStr = `${dh}:` + durStr
    }
    const string = `${curStr} / ${durStr}`
    return <span class={this.props.class}>{string}</span>
  }
}

export default class extends React.Component {
  render () { return (
    <div class="bg-gray-800 fixed inset-x-0 bottom-0 grid grid-cols-2 text-white">
      <div class="flex items-center space-x-2 sm:mx-2 md:space-x-4">
        <img class="h-10 w-10 object-cover object-center hidden md:block" src="https://picardia.co/static/papes/4b50dbaa-624e-11e7-b2fe-3a6e8f7c670f.jpg"/>
        <div class="text-sm overflow-hidden">
          <p class="truncate cursor-pointer hover:underline select-none"><b>{'Song name'}</b></p>
          <p class="truncate select-none"><span class="cursor-pointer hover:underline">{'Artist name'}</span> • <span class="cursor-pointer hover:underline">{'Album name'}</span></p>
        </div>
        <TimeStat class="whitespace-nowrap text-xs tracking-tighter hidden sm:block" currentTime={this.props.currentTime} duration={this.props.duration}/>
      </div>
      <div class="flex items-center justify-end lg:space-x-2">
        <input class="volume-slider hidden sm:block" type="range" min="0" max="1000" defaultValue={this.props.volume * 1000} onChange={this.props.changeVol}></input>
        <div class="cursor-pointer p-1 md:p-2" onClick={this.props.toggleMute}>{
          this.props.volume === 0
          ? <VolumeOffIcon class="h-6" color="#fff"/>
          : this.props.volume < 1/3
          ? <VolumeLowIcon class="h-6" color="#fff"/>
          : this.props.volume < 2/3
          ? <VolumeMedIcon class="h-6" color="#fff"/>
          : <VolumeHighIcon class="h-6" color="#fff"/>
        }</div>
        <div class="cursor-pointer hidden sm:block p-1 md:p-2" onClick={this.props.toggleLoop}>{
          this.props.loop === 0
          ? <RepeatIcon class="h-6" color="#999"/>
          : this.props.loop === 1
          ? <RepeatIcon class="h-6" color="#fff"/>
          : <Repeat1Icon class="h-6" color="#fff"/>
        }</div>
        <div class="cursor-pointer hidden sm:block p-1 md:p-2" onClick={this.props.toggleShuffle}>
          <ShuffleIcon class="h-6" color={this.props.shuffle ? '#fff' : '#999'}/>
        </div>
        <div class="cursor-pointer hidden sm:block p-1 md:p-2" onClick={this.props.toggleQueue}>
          <QueueIcon class="h-6" color="#fff"/>
        </div>
        <div class="cursor-pointer hidden sm:block p-1 md:p-2" onClick={this.props.skipBack}>
          <StepBackIcon class="h-6" color="#fff"/>
        </div>
        <div class="cursor-pointer p-1 md:p-2" onClick={this.props.togglePause}>{
          this.props.paused
          ? <PlayIcon class="h-8 md:h-10" color="#fff"/>
          : <PauseIcon class="h-8 md:h-10" color="#fff"/>
        }</div>
        <div class="cursor-pointer p-1 md:p-2" onClick={this.props.skipFwd}>
          <StepFwdIcon class="h-6" color="#fff"/>
        </div>
        <div class="cursor-pointer sm:hidden p-1 md:p-2">
          <DrawerUpIcon class="h-6" color="#fff"/>
        </div>
      </div>
      <input
        class="w-full track-slider"
        type="range" min="0" max="1000"
        value={String(Math.floor((this.props.currentTime / this.props.duration) * 1000))}
        onChange={this.props.seek}
      />
      <div class="absolute w-full h-full overflow-hidden" style={{ zIndex: -1 }}>
        <img
          class="w-full h-full object-cover object-center filter blur-2xl brightness-50"
          src="https://picardia.co/static/papes/4b50dbca-624e-11e7-b2fe-3a6e8f7c670f.jpg"
        />
      </div>
    </div>
  ) }
}
