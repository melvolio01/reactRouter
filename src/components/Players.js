import React from 'react';
import {
  useLocation,
  useRouteMatch,
  Switch,
  Route
} from 'react-router-dom';
import { parse } from 'querystring';
import usePlayers from '../hooks/usePlayers';
import Sidebar from './Sidebar';
import Player from './Player.js';

const Players = () => {
  const location = useLocation()
  const { url } = useRouteMatch()
  const team = location.search
    ? parse(location.search).teamId
    : null

  const {
    response: players,
    loading
  } = usePlayers(team)

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="container two-column">
      <Sidebar
        title='Players'
        list={players.map((player) => player.name)}
      />
      <Switch>
        <Route path={`${url}/:playerId`}>
          <Player players={players} />
        </Route>
      </Switch>
    </div>
  );
};

export default Players;