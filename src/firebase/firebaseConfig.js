import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBHK3ir42Gz236xIIYvdqk96uVRWNVhuZQ",
    authDomain: "buonafit-8d2b5.firebaseapp.com",
    projectId: "buonafit-8d2b5",
    storageBucket: "buonafit-8d2b5.appspot.com",
    messagingSenderId: "935986322247",
    appId: "1:935986322247:web:f5b0b4c93a33dd73c4ca62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export {
  app, 
  google, 
  facebook,
  db
}