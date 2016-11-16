import firebase from 'app/firebase';
import * as types from './actionTypes'

export var startLogin = (email, password) => {
  return(dispatch, getState) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then((result)=>{
      //dispatch(login(result.uid));
    }, (error) => {
      console.log(error.code);
    })
  }
}

export var startLogout = () => {
  return(dispatch, getState) => {
    firebase.auth().signOut().then(() => {
      //dispatch(logout());
    })
  }
}

export var login = (uid) => {
  return {
    type: types.LOGIN,
    uid: uid
  }
}

export var logout = () => {
  return {
    type: types.LOGOUT
  }
}