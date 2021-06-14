import React from 'react'

export class DrawerUpIcon extends React.Component {
  render () { return (
    <svg className={this.props.className} fill={this.props.color} viewBox="0 0 24 24" focusable="false">
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
    </svg>
  ) }
}

export class DrawerDownIcon extends React.Component {
  render () { return (
    <svg className={this.props.className} fill={this.props.color} viewBox="0 0 24 24" focusable="false">
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
    </svg>
  ) }
}

export class PauseIcon extends React.Component {
  render () { return (
    <svg className={this.props.className} fill={this.props.color} viewBox="0 0 24 24" focusable="false">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
    </svg>
  ) }
}

export class PlayIcon extends React.Component {
  render () { return (
    <svg className={this.props.className} fill={this.props.color} viewBox="0 0 24 24" focusable="false">
      <path d="M8 5v14l11-7z"></path>
    </svg>
  ) }
}

export class QueueIcon extends React.Component {
  render () { return (
    <svg className={this.props.className} fill={this.props.color} viewBox="0 0 24 24" focusable="false">
      <path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"></path>
    </svg>
  ) }
}

export class RepeatIcon extends React.Component {
  render () { return (
    <svg className={this.props.className} fill={this.props.color} viewBox="0 0 24 24" focusable="false">
      <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"></path>
    </svg>
  ) }
}

export class Repeat1Icon extends React.Component {
  render () { return (
    <svg className={this.props.className} fill={this.props.color} viewBox="0 0 24 24" focusable="false">
      <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"></path>
    </svg>
  ) }
}

export class SettingsIcon extends React.Component {
  render () { return (
    <svg className={this.props.className} fill={this.props.color} viewBox="0 0 24 24" focusable="false">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path>
    </svg>
  ) }
}

export class ShuffleIcon extends React.Component {
  render () { return (
    <svg className={this.props.className} fill={this.props.color} viewBox="0 0 24 24" focusable="false">
      <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"></path>
    </svg>
  ) }
}

export class StepBackIcon extends React.Component {
  render () { return (
    <svg className={this.props.className} fill={this.props.color} viewBox="0 0 24 24" focusable="false">
      <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path>
    </svg>
  ) }
}

export class StepFwdIcon extends React.Component {
  render () { return (
    <svg className={this.props.className} fill={this.props.color} viewBox="0 0 24 24" focusable="false">
      <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path>
    </svg>
  ) }
}

export class VolumeOffIcon extends React.Component {
  render () { return (
    <svg className={this.props.className} fill={this.props.color} viewBox="0 0 24 24" focusable="false">
      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path>
    </svg>
  ) }
}

export class VolumeLowIcon extends React.Component {
  render () { return (
    <svg className={this.props.className} fill={this.props.color} viewBox="0 0 24 24" focusable="false">
      <path d="M7 9v6h4l5 5V4l-5 5H7z"></path>
    </svg>
  ) }
}

export class VolumeMedIcon extends React.Component {
  render () { return (
    <svg className={this.props.className} fill={this.props.color} viewBox="0 0 24 24" focusable="false">
      <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"></path>
    </svg>
  ) }
}

export class VolumeHighIcon extends React.Component {
  render () { return (
    <svg className={this.props.className} fill={this.props.color} viewBox="0 0 24 24" focusable="false">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path>
    </svg>
  ) }
}
