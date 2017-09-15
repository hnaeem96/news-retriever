import React from 'react';
import { Router, Route } from 'react-router';

import News from './containers/News';
import NewsDetails from './containers/NewsDetails';
import SavedNews from './containers/SavedNews';
import FavoriteNews from './containers/Favorites';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/favorites" component={FavoriteNews} />
    <Route path="/saved" component={SavedNews} />
    <Route path="/:id" component={NewsDetails} />
    <Route path="/" component={News} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
