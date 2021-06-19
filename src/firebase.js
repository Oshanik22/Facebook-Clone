// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBAI7Yp6oCMCtIE35nzSB5w2cRb8aKF-xY",
    authDomain: "facebook-clone-82ff9.firebaseapp.com",
    projectId: "facebook-clone-82ff9",
    storageBucket: "facebook-clone-82ff9.appspot.com",
    messagingSenderId: "776113850248",
    appId: "1:776113850248:web:6b201577fa35833e2a5c3d",
    measurementId: "G-V7ZTNRXWDG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;