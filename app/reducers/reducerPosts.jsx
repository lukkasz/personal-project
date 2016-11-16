import * as types from 'app/actions/actionTypes';

const INITIAL_STATE = { all: [], post: null, message: null};

export default function reducerPosts(state = INITIAL_STATE, action) {
	switch (action.type) {
		case types.FETCH_POSTS:
			return {...state, all: action.posts}

		case types.ADD_POST: 
			return {...state, all: [...state.all, action.post], message: "Post added successfully"}
			
		case types.FETCH_POST:
			return {...state, post: action.post}
			
		default: 
			return state;
	}
}