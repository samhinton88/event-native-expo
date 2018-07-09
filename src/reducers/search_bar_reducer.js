import {
  SEARCH_VALUE_CHANGED
} from '../actions/types';

const defaultState = {
  value: ''
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_VALUE_CHANGED:
      return {
        ...state,
        value: action.payload
      }
  }
  return state;
}
