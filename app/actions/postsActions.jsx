import firebase, {firebaseRef} from 'app/firebase';

import * as types from './actionTypes';

export function fetchPosts(posts) {
	return {
		type: types.FETCH_POSTS,
		posts
	};
};

export function startFetchPosts() {
	return (dispatch, getState) => {
		firebaseRef.child('posts').once('value').then((snapshot) => {
			const postsRef = snapshot.val() || {};
			const posts = Object.keys(postsRef).map((key)=>{
				return {
					id: key,
					...postsRef[key]	
				};
			});
			
			dispatch(fetchPosts(posts));
		});
	};
};

export function fetchPost(post) {
	return {
		type: types.FETCH_POST,
		post
	};
};

export function startFetchPost(id) {
	return (dispatch, getState) => {
		firebaseRef.child('posts').child(id).once('value').then((snapshot)=>{
			const postRef = {
				id: id,
				...snapshot.val()
			};
			dispatch(fetchPost(postRef));
		})
	}
}


export function addPost(post) {
	return {
		type: types.ADD_POST,
		post
	}
}

export var startAddPost = (title, text) => {
	return (dispatch, getState) => {
		
		var post = {
			title,
			text
		}
		
		var postRef = firebaseRef.child('posts').push(post);
		
		return postRef.then(() => {
			dispatch(addPost({
				...post,
				id: postRef.key
			}))
		}) 
		
		
	}
}

export function deletePost() {
	return {
		type: types.DELETE_POST
	}
}

export function startDeletePost(id) {
	// stuff to delete post
	return (dispatch, getState) => {
		firebaseRef.child('posts').child(id).remove();
		// we dispatch delete post action, but didn't create reducer for it
		// maybe we will use thi action for success popup message 
		dispatch(deletePost());
	}
}