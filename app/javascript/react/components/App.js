import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import LeagueIndex from './LeagueIndex'
import LeagueShowContainer from './LeagueShowContainer'
import UserShowContainer from './UserShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LeagueIndex}/>
        <Route exact path="/leagues" component={LeagueIndex}/>
        <Route exact path="/leagues/:id" component={LeagueShowContainer}/>
        <Route exact path="/users/:id" component={UserShowContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
