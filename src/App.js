import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Global from './styles/Global'

import Home from './pages/Home'

const App = () => (
  <>
    <Global />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </>
)

export default App
