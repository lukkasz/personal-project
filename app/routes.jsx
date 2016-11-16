import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'App';
import Home from 'Home';
import ErrorPage from '404Page';
import Login from 'Login';
import PostsIndex from 'posts/PostsIndex';
import PostsNew from 'posts/PostsNew';
import PostsShow from 'posts/PostsShow';
import Videos from 'videos/Videos';
import CreateVideo from 'videos/CreateVideo';

import firebase from 'app/firebase';

const requireLogin = (nextState, replace, next) => {
	if (!firebase.auth().currentUser) {
		replace('/');
	}
	next();
}

const requireRedirect = (nextState, replace, next) => {
	if (firebase.auth().currentUser) {
		replace('/posts');
	}
	next();
}

export default (
	<Route path="/" component={App} >
		<IndexRoute component={Login} onEnter={requireRedirect} />
		<Route path="posts">
			<IndexRoute component={PostsIndex} />
			<Route path=":id" component={PostsShow} />
		</Route>
		
		<Route path="videos">
			<IndexRoute component={Videos} />
			<Route path="new" component={CreateVideo} />
		</Route>
		
		<Route path="admin/posts/new" component={PostsNew} onEnter={requireLogin} />
		<Route path="*" component={ErrorPage} />
	</Route>
);