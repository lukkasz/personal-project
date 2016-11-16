const firebase = require('firebase');

try {
    var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    //messagingSenderId: "30140386824"
  };

    firebase.initializeApp(config);
    
} catch (e) {
    
}

export var firebaseRef = firebase.database().ref();
export default firebase;