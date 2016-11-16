import * as types from 'app/actions/actionTypes';

const INITIAL_STATE = {all: []};

export default function reducerVideos(state=INITIAL_STATE, action) {
  switch(action.type) {
    case types.LOAD_VIDEOS_SUCCESS:
      return {...state, all: action.videos}
      
    case types.CREATE_VIDEO_SUCCESS:
      return {...state, all: [...state.all, action.post]}
    
    default: 
      return state;
  }
}

