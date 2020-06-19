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
import Loading from './Loading';

const Players = () => {
  const location = useLocation()
  const { url } = useRouteMatch()
  // slice(1) to remove the leading question mark on location.search
  const team = location.search ? parse(location.search.slice(1)).teamId : null
  const {
    response: players,
    loading
  } = usePlayers(team)

  if (loading) {
    return <Loading />
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
        <Route path='*'>
          <div className="sidebar-instruction">Select a player</div>
        </Route>
      </Switch>
    </div>
  );
};

export default Players;