import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import LeagueIndex from './LeagueIndex'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LeagueIndex} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
