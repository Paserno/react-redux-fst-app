import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBUDkAVKHXfziqmS6AmucfRDupO1nu0UvI",
    authDomain: "react-redux-app-fst.firebaseapp.com",
    projectId: "react-redux-app-fst",
    storageBucket: "react-redux-app-fst.appspot.com",
    messagingSenderId: "859300626170",
    appId: "1:859300626170:web:c193360b5c4f6f21255343"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore(); // Referencia a firestore
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); // para hacer autentificacion con google
   
  export {
    db,
    googleAuthProvider,
    firebase
  }