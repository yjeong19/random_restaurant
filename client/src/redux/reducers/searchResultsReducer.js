import {
  ADD_SEARCH_RESULTS,
  ADD_RANDOM_RESTAURANT,
} from '../constants';

const initialState = null;

const searchResultsReducer = ((state = initialState, action) => {
  switch(action.type){
    case ADD_SEARCH_RESULTS:
      console.log(action.payload, 'line 11 REDUX REDUCER ---------');
      return [...state, ...action.payload];
      break;

    case ADD_RANDOM_RESTAURANT:
      return state;
      break;

    default:
      return state;
  }
});

export default searchResultsReducer;
