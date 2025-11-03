import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAw9mGfJ2aZz-374OPbkkYRfzeDclcdEtU",
  authDomain: "presentify-40a34.firebaseapp.com",
  projectId: "presentify-40a34",
  storageBucket: "presentify-40a34.appspot.com",
  messagingSenderId: "269471031363",
  appId: "1:269471031363:web:d27a667bb5c5d6a656f4f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Secondary instance if needed
const secondaryApp = initializeApp(firebaseConfig, "secondary");
export const secondaryAuth = getAuth(secondaryApp);