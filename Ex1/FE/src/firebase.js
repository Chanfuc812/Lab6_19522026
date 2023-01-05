import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDuVB6_VOKCzuBymMRuflDwbWXeFqPgAQY",
  authDomain: "facebookphake-24646.firebaseapp.com",
  projectId: "facebookphake-24646",
  storageBucket: "facebookphake-24646.appspot.com",
  messagingSenderId: "382063639369",
  appId: "1:382063639369:web:8be9b8b61c717a5b84f898",
  measurementId: "G-LGP77TYRJX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}