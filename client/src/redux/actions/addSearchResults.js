import {
  ADD_SEARCH_RESULTS,
  ADD_RANDOM_RESTAURANT,
} from '../constants';

const addSearchResults = (payload) => {
  return {
    type: ADD_SEARCH_RESULTS,
    payload
  }
}

const addRandomRestaurant = (payload) => {
  return {
    type: ADD_RANDOM_RESTAURANT,
    payload
  }
}

export { addSearchResults, addRandomRestaurant };
