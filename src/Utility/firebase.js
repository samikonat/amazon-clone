import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyByk6uY95T5Ksv8IT7RNJwZru5OREqq6Hs",
  authDomain: "clone-19b44.firebaseapp.com",
  projectId: "clone-19b44",
  storageBucket: "clone-19b44.firebasestorage.app",
  messagingSenderId: "217389226354",
  appId: "1:217389226354:web:79ea722dace61962f625eb",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
