import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "todos-auth-a1bcc.firebaseapp.com",
  databaseURL: "https://todos-auth-a1bcc.firebaseio.com",
  projectId: "todos-auth-a1bcc",
  storageBucket: "todos-auth-a1bcc.appspot.com",
  messagingSenderId: "390955727995",
  appId: "1:390955727995:web:8e2d0c85e9974c38"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
