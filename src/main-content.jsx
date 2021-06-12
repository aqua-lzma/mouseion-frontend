import React from 'react'

export default class extends React.Component {
  stuff = new Array(100).fill().map((v, i) => {
    return <p key={i}>hi{i}</p>
  })

  render () { return (
    <div class="bg-green-500 py-12 md:py-20">
      <div class="bg-pink-400 mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-30 2xl:mx-40">
        {this.stuff}
      </div>
    </div>
  ) }
}
