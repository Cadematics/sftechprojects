// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzYsYg-DY5v1RHCrtbGeLsCbbDaRcOkzQ",
  authDomain: "sftechprojects-185eb.firebaseapp.com",
  projectId: "sftechprojects-185eb",
  storageBucket: "sftechprojects-185eb.appspot.com",
  messagingSenderId: "865025766162",
  appId: "1:865025766162:web:1876b396026d96685df9cb",
  measurementId: "G-RZ3MTRFJVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);