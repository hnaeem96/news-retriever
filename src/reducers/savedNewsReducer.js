import { GET_SAVED_NEWS, CHECK_SAVED_NEWS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case GET_SAVED_NEWS:
      return action.payload.data;
    case CHECK_SAVED_NEWS:
      return action.payload.data;
    default:
      return state;
  }
}
