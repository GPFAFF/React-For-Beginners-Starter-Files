import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC2x3qD2NKDqpY95zrLZRNQx4zydHTBow8",
  authDomain: "catch-of-the-day-greg-pfaff.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-greg-pfaff.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

// this is a default export;

export default base;
