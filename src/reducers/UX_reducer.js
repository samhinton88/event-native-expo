import {
  LOADING_START,
  LOADING_FINISH,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS
} from '../actions/types';

const defaultState = {
  loading: false,
  loginError: ''
}

export default (state = defaultState, action) => {
  console.log('in UX reducer with action', action)
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        loading: true
      }
    case LOADING_FINISH:
      return {
        ...state,
        loading: false
      }
    case LOGIN_USER_FAIL:
      return {
        ...state,
        loginError: 'Error logging in',
        loading: false
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false
      }
  }
  return state;
}
