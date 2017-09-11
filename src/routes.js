import React from 'react';
import { Router, Route } from 'react-router';

import News from './components/News';
import NewsDetails from './components/NewsDetails';
import SavedNews from './components/SavedNews';
import FavoriteNews from './components/Favorites';
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
