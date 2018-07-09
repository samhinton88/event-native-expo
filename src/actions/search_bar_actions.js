import {
  SEARCH_VALUE_CHANGED
} from './types';

export const searchBarChange = (value) => {
  return { type: SEARCH_VALUE_CHANGED, payload: value }
}
