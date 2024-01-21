'use client'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQnYZD6DBKlHUxdMz3exHupjSYHxqns7w",
  authDomain: "visionphoneotp.firebaseapp.com",
  projectId: "visionphoneotp",
  storageBucket: "visionphoneotp.appspot.com",
  messagingSenderId: "741418858936",
  appId: "1:741418858936:web:a70e46a679a6c672dfb74d",
  measurementId: "G-YCQPX98Y88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app