import {
  EVENT_FETCH,
  EVENT_FETCH_SUCCESS
} from '../actions/types';

const defaultState = {
  byId: {},

}

export default (state = defaultState, action) => {
  switch (action.type) {
    case EVENT_FETCH:
      return {
        ...state,
        byId: nomalise(action.payload)
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
