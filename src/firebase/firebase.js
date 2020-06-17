import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDcSBkYLu9aLqMhROD3f3Y9c-DlcvRdTP4',
  authDomain: 'mental-remedy.firebaseapp.com',
  databaseURL: 'https://mental-remedy.firebaseio.com',
  projectId: 'mental-remedy',
  storageBucket: 'mental-remedy.appspot.com',
  messagingSenderId: '85742469048',
  appId: '1:85742469048:web:7a9b49a93d72a8845d194d',
  measurementId: 'G-4GKCSPWS9S'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const firebaseAuth = firebase.auth();

const users = db.collection('users');
const profiles = db.collection('profiles');
const forumPosts = db.collection('forum_posts');
const comments = db.collection('comments');

export { users, firebaseAuth, profiles, forumPosts, comments };
