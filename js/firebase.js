// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAgUwA4ga9WrZ6elL-CrzbCG36PuTP0b04',
  authDomain: 'cw-foodninja-pwa.firebaseapp.com',
  databaseURL: 'https://cw-foodninja-pwa.firebaseio.com',
  projectId: 'cw-foodninja-pwa',
  storageBucket: 'cw-foodninja-pwa.appspot.com',
  messagingSenderId: '212985227591',
  appId: '1:212985227591:web:3059cba514664c2e9e8462'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
