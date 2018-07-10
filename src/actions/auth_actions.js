import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

import { BASE_URL } from './config';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const loginUser = ({email, password}) => async dispatch => {
  console.log('loginUser fired with', email, password)
  dispatch({type: LOGIN_USER })

  const res = await axios.post(`${BASE_URL}/api/userlogin`, {email, password})
    .catch((err) => loginUserFail(dispatch));

  if(!res) { return loginUserFail(dispatch)}

  loginUserSuccess(dispatch, res.data)
}

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL })
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload:user
  });

  Actions.main();
}
