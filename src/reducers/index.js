import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import savedNewsReducer from './savedNewsReducer';
import favoritedNewsReducer from './favoritedNewsReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  savedNews: savedNewsReducer,
  favoriteNews: favoritedNewsReducer
});

export default rootReducer;
