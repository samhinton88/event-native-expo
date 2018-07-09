import axios from 'axios';
import {
  EVENT_FETCH,
  EVENT_FETCH_SUCCESS
} from './types';
import { BASE_URL } from './config';

export const fetchEvents = () => async dispatch => {
  const res = await axios.get(`${BASE_URL}/api/events`)

  dispatch({ type: EVENT_FETCH_SUCCESS })
  dispatch({ type: EVENT_FETCH, payload: res.data })
}
