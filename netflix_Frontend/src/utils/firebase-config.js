// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}  from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU8HSm-0DDuAZeCqVVYBnkQhqWnrL4U7I",
  authDomain: "netflix-clone-5c026.firebaseapp.com",
  projectId: "netflix-clone-5c026",
  storageBucket: "netflix-clone-5c026.appspot.com",
  messagingSenderId: "328276282046",
  appId: "1:328276282046:web:727f155d8d4a575d49ecef",
  measurementId: "G-EC87CCCFZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);