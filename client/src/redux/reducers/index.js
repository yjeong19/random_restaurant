import { combineReducers } from 'redux';
// import initialReducer from './initialReducer';
import searchResultsReducer from './searchResultsReducer';

const rootReducer = combineReducers({
  // initialReducer,
  searchResultsReducer,
});

export default rootReducer;
