// import _ from 'lodash';

import { GET_NEWS, GET_NEWS_DETAILS } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_NEWS:
      let articles = action.payload.data.articles;
      articles.forEach((article, index) => {
        article['id'] = index + 1;
      });
      return(articles);
    case GET_NEWS_DETAILS:
      let newsArticles = action.payload.data.articles;
      newsArticles.forEach((article, index) => {
        article['id'] = index + 1;
      });
      return { ...state, [action.payload.data.articles.id]: action.payload.data.articles };
    default:
      return state;
  }
}
