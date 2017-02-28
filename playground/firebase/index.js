import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDKe0w2vf9MIjHlNWgkXgEV4gMJ-D6ewgg",
  authDomain: "todo-app-4a4b3.firebaseapp.com",
  databaseURL: "https://todo-app-4a4b3.firebaseio.com",
  storageBucket: "todo-app-4a4b3.appspot.com",
  messagingSenderId: "737003993866"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo APP',
    version: '0.6'
  },
  isRunning: true,
  user: {
    name: 'Ping',
    age: 29
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'SB!'
});
todosRef.push({
  text: 'Film SB!'
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
//
// console.log('Todo id',newNoteRef.key);
