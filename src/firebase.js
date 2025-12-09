import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBzYsYg-DY5v1RHCrtbGeLsCbbDaRcOkzQ",
  authDomain: "sftechprojects-185eb.firebaseapp.com",
  projectId: "sftechprojects-185eb",
  storageBucket: "sftechprojects-185eb.firebasestorage.app",
  messagingSenderId: "865025766162",
  appId: "1:865025766162:web:1876b396026d96685df9cb",
  measurementId: "G-RZ3MTRFJVY"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
