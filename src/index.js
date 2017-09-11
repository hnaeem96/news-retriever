import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';
import Navbar from './components/Navbar';
import Routes from './routes';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <div>
    <Navbar />
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Routes history={browserHistory} />
    </Provider>
  </div>
  , document.getElementById('root')
);
