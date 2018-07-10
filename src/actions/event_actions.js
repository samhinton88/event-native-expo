import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  EVENT_FETCH,
  EVENT_FETCH_SUCCESS,
  EVENT_SELECT,
  INTEREST_REGISTER
} from './types';
import { BASE_URL } from './config';

export const fetchEvents = () => async dispatch => {
  const res = await axios.get(`${BASE_URL}/api/events`)

  dispatch({ type: EVENT_FETCH_SUCCESS })
  dispatch({ type: EVENT_FETCH, payload: res.data })
}

export const selectEvent = (eventId) => {

  Actions.eventPage();
  return { type: EVENT_SELECT, payload: eventId }
}

export const registerInterest = (userId, eventId) => async dispatch => {
  console.log('registerinterest firing with', {userId, eventId})
  const res = await axios.post(`${BASE_URL}/api/registerinterest`, {userId, eventId})
    .catch(err => console.log(err))

  dispatch({ type: INTEREST_REGISTER, payload: res.data })
}
