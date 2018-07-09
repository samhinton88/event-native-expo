import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../actions/types';

const defaultState = {
  user: null,
  email: '',
  password: '',
  error: '',
  loading: false
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loading: true
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        email: '',
        password: ''
      }
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      }
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload
      }
  }

  return state;
}
