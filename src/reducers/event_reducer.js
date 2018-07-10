import {
  EVENT_FETCH,
  EVENT_FETCH_SUCCESS,
  EVENT_SELECT,
  INTEREST_REGISTER
} from '../actions/types';

const defaultState = {
  byId: {},
  list: [],
  selectedEvent: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case EVENT_FETCH:
      return {
        ...state,
        byId: nomalise(action.payload),
        list: action.payload
      }
    case EVENT_SELECT:
      return {
        ...state,
        selectedEvent: state.byId[action.payload]
      }
    case INTEREST_REGISTER:
      const { event } = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [event._id] : event
        }
      }
  }
  return state
}


function nomalise(data) {
  // return object listing items by id

  const out = {};

  data.forEach((d) => out[d._id] = d);

  return out;
}
