import { 
  applyMiddleware,
	createStore, 
	compose 
} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import rootReducer from 'app/reducers';

export default function configure(initailState = {}) {
  
  // create store and add support for react dev tools in Chrome
  const store = createStore(rootReducer, initailState, compose(
    applyMiddleware(promise),
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  
  return store;
  
}
