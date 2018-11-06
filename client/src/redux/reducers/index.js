import { combineReducers } from 'redux';
// import initialReducer from './initialReducer';
import searchResultsReducer from './searchResultsReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  // initialReducer,
  searchResultsReducer,
  commentsReducer,
});

export default rootReducer;
