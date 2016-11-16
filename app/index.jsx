import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from 'app/store/configureStore'; 
import routes from 'app/routes';
import firebase from 'app/firebase';
import {login, logout} from 'app/actions/authActions';
import {startFetchPosts} from 'app/actions/postsActions';
import {loadVideos} from 'app/actions/videosActions'

//import './../playground/firebase/index';

const store = configureStore();

store.dispatch(startFetchPosts());
store.dispatch(loadVideos())

firebase.auth().onAuthStateChanged((user)=>{
	if (user) {
		store.dispatch(login(user.uid));
		
		if (window.location.pathname === '/') {
			browserHistory.push('/posts');
		}
	} else {
		store.dispatch(logout());
	}
})


//Load bootstrap css
require('style!css!bootstrap/dist/css/bootstrap.min.css');

//Load Custom App Style
import 'style!css!sass!applicationStyles';

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>
	, document.querySelector('.app'));
