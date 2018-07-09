import {
  LOADING_START,
  LOADING_FINISH,
  LOGIN_USER_FAIL
} from '../../actions/types';

const defaultState = {
  loading: false,
  loginError: ''
}

export default (state = defaultState, action) => {
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
        loginError: 'Error loggin in'
      }
  }
  return state;
}
