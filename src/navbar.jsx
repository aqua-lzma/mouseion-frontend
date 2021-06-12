import React from 'react'

import { SettingsIcon } from './icons'

export default class extends React.Component {
  render() {
    return (
      <div class="bg-red-400 fixed inset-x-0 top-0 px-2 md:py-2 flex items-center">
        <h1 class="text-xl text-white">蒸気<span class="hidden sm:inline"><span class="text-gray-300">の</span>博物館</span></h1>
        <div class="flex space-x-2 md:space-x-4 flex-grow justify-end items-center">
          <input
            class="appearance-none bg-transparent border-2 rounded-sm text-white placeholder-white px-1 md:px-2 md:py-1 max-w-96 min-w-0 delay-75"
            style={{borderColor: 'rgba(255, 255, 255, 0.5)'}}
            placeholder="Search..."
          />
          <div class="cursor-pointer p-1">
            <SettingsIcon class="h-6 lg:h-8" color="white"/>
          </div>
        </div>
      </div>
    )
  }
}
