import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Home from './Home'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shows" render={() => <h1>Shows Go Here!</h1>} />
      <Route exact path="/music" render={() => <h1>Music Goes Here!</h1>} />
      <Route render={() => <h1 className="not-found">Not Found!</h1>} />
    </Switch>
  </Router>
)


export default App
