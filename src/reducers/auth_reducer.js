import {
  LOGIN_USER_SUCCESS
} from '../../actions/types';

const defaultState = {
  user: null
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      }
  }

  return state;
}
