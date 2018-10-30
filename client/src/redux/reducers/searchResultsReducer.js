import {
  ADD_SEARCH_RESULTS,
  ADD_RANDOM_RESTAURANT,
} from '../constants';

const initialState = null;

const searchResultsReducer = ((state = initialState, action) => {
  switch(action.type){
    case ADD_SEARCH_RESULTS:
      return state;
      break;

    case ADD_RANDOM_RESTAURANT:
      return state;
      break;

    default:
      return state;
  }
});

export default searchResultsReducer;
