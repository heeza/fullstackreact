import { FETCH_USER } from '../actions/types';

export default function(state = {}, action) {
  console.log("Called reducer", action);
  switch(action.type) {
    case FETCH_USER:
      return action.payload.data;
    default:
      return state;
  }
}