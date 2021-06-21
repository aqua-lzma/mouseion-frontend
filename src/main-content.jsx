import { Switch, Route } from 'react-router-dom'

import Artists from './main-views/artists-page'
import Artist from './main-views/artist-page'

function Home () {
  return <h1>Home</h1>
}

export default function MainContent () {
  return (
    <div className='bg-main py-16 lg:py-20 min-h-screen'>
      <div className='mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-30 2xl:mx-40 space-y-4'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/labels'>
            <Home />
          </Route>
          <Route exact path='/artists'>
            <Artists />
          </Route>
          <Route exact path='/albums'>
            <Home />
          </Route>
          <Route exact path='/songs'>
            <Home />
          </Route>
          <Route exact path='/artist/:id'>
            <Artist />
          </Route>
          <Route exact path='/album/:id'>
            <Home />
          </Route>
          <Route exact path='/search'>
            <Home />
          </Route>
          <Route exact path='/settings'>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
