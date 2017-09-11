import { GET_FAVORITE_NEWS, CHECK_FAVORITE_NEWS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case GET_FAVORITE_NEWS:
      return action.payload.data;
    case CHECK_FAVORITE_NEWS:
      return action.payload.data;
    default:
      return state;
  }
}
