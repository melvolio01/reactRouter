import React from 'react';
import Sidebar from './Sidebar';
import Team from './Team';
import useTeamNames from '../hooks/useTeamNames';
import {
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom';

const Teams = () => {
  const {
    response: teamNames,
    loading
  } = useTeamNames()
  const { url } = useRouteMatch()

  if (loading) {
    return (<div className="center-text">Loading...</div>)
  }

  return (
    <div className="container two-column">
      <Sidebar
        title="teams"
        list={teamNames}
      />
      <Switch>
        <Route path={`${url}/:teamId`} >
          <Team teams={teamNames} />
        </Route>
        <Route path="*">
          <div className="sidebar-instruction">Select a team</div>
        </Route>
      </Switch>
    </div>
  );
};

export default Teams;