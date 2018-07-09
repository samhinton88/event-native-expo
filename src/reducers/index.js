import  combineReducers from 'redux';

import authReducer from './auth_reducer';
import eventReducer from './event_reducer';
import searchBarReducer from './search_bar_reducer';
import UXReducer from './UX_reducer';

export default combineReducers({
  UX: UXReducer,
  events: eventReducer,
  searchBar: searchBarReducer,
  auth: authReducer
})
