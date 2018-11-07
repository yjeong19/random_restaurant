import {
  ADD_LIKES
} from '../constants';

const initialState = {}

const likesReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_LIKES:
      console.log(action.likes);
      return Object.assign(state, action.likes);
      break;

    default:
      return state;
  }


}

export default likesReducer;
