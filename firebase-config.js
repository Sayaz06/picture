// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQcdSXeMHYkCdI9UmJqo5gwCKm4dKZUW0",
  authDomain: "stress-pronouns.firebaseapp.com",
  projectId: "stress-pronouns",
  storageBucket: "stress-pronouns.firebasestorage.app",
  messagingSenderId: "760146750533",
  appId: "1:760146750533:web:f31c87f5098661f90b472c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// Export supaya boleh guna di file lain
export {
  app,
  auth,
  provider,
  db,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
  serverTimestamp
};