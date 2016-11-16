import * as types from 'app/actions/actionTypes';

const INITIAL_STATE = {};

export default function reducerAuth(state = INITIAL_STATE, action) {
  switch(action.type) {
    
    case types.LOGIN:
      
      return {
        uid: action.uid
      }
    
    case types.LOGOUT:
      
      return {}
    
    default:
      return state;
  }
} 