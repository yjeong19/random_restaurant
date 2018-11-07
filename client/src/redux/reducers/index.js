import { combineReducers } from 'redux';
// import initialReducer from './initialReducer';
import searchResultsReducer from './searchResultsReducer';
import commentsReducer from './commentsReducer';
import likesReducer from './likesReducer';

const rootReducer = combineReducers({
  // initialReducer,
  searchResultsReducer,
  commentsReducer,
  likesReducer,
});

export default rootReducer;
