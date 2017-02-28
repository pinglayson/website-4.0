import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDKe0w2vf9MIjHlNWgkXgEV4gMJ-D6ewgg",
    authDomain: "todo-app-4a4b3.firebaseapp.com",
    databaseURL: "https://todo-app-4a4b3.firebaseio.com",
    storageBucket: "todo-app-4a4b3.appspot.com",
    messagingSenderId: "737003993866"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
