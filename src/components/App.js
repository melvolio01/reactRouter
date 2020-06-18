import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';
import TeamPage from './TeamPage';
import Navbar from './Navbar';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/players">
            <Players />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path='/:teamId' exact>
            <TeamPage />
          </Route>
          <Route path="*">
            <h1 className="text-center">404</h1>
            <h2 className="text-center">Oops, page not found</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}