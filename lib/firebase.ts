// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw9mGfJ2aZz-374OPbkkYRfzeDclcdEtU",
  authDomain: "presentify-40a34.firebaseapp.com",
  projectId: "presentify-40a34",
  storageBucket: "presentify-40a34.firebasestorage.app",
  messagingSenderId: "269471031363",
  appId: "1:269471031363:web:d27a667bb5c5d6a656f4f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const secondaryApp = initializeApp(firebaseConfig,"secondary");
export const db = getFirestore();
export const secondaryAuth = getAuth(secondaryApp);