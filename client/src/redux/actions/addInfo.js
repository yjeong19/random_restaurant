import {
  ADD_INFO
} from '../constants';

const addInfo = (payload) => {
  return {
    type: ADD_INFO,
    payload
  }
}

export { addInfo };
