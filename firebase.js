// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAsiLQZfhBjoIwCkoaB9qdP1aO5jKGl-_s',
  authDomain: 'facebook-clone-8bac9.firebaseapp.com',
  projectId: 'facebook-clone-8bac9',
  storageBucket: 'facebook-clone-8bac9.appspot.com',
  messagingSenderId: '335801191694',
  appId: '1:335801191694:web:6ff5533e31a6d567135b5f',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
