import React from 'react';
import {
  useLocation,
  useParams,
  useRouteMatch,
  Switch,
  Route
} from 'react-router-dom';
import Sidebar from './Sidebar';
import Article from './Article';
import Loading from './Loading';
import useTeamsArticles from '../hooks/useTeamsArticles';

const Articles = () => {
  const { teamId } = useParams();
  const { path } = useRouteMatch()
  const {
    response: articles,
    loading
  } = useTeamsArticles(teamId)

  if (loading) return <Loading />

  return (
    <div className="container two-column">
      <Sidebar
        title='Articles'
        list={articles.map(article => article.title)}
      ></Sidebar>
      <Switch>
        <Route path={`${path}/:articleId`}>
          <Article />
        </Route>
        <Route path="*">
          <div className="sidebar-instructions">
            Please select an article
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default Articles;