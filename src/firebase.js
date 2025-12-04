// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
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
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
