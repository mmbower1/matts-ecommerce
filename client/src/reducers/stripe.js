import {
  STRIPE_SUCCESS,
  STRIPE_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  token: ''
}

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case STRIPE_SUCCESS:
      return {
        ...state,
        token: payload
      }
    case STRIPE_ERROR:
      return {
        ...state,
      }
    default:
      return state;
  }
}