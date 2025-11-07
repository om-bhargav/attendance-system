import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDocs,collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg30Cw-lZZXnH96QV5DnhGiU1y8QljQ20",
  authDomain: "presentify-a0faf.firebaseapp.com",
  projectId: "presentify-a0faf",
  storageBucket: "presentify-a0faf.appspot.app",
  messagingSenderId: "609809306879",
  appId: "1:609809306879:web:ea3372f9f68d10e31668ca"
};
const secondaryConfig = {
  apiKey: "AIzaSyAg30Cw-lZZXnH96QV5DnhGiU1y8QljQ20",
  authDomain: "presentify-a0faf.firebaseapp.com",
  projectId: "presentify-a0faf",
  storageBucket: "presentify-a0faf.appspot.app",
  messagingSenderId: "609809306879",
  appId: "1:609809306879:web:cea97d7afc69136d1668ca"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


// Optional secondary instance
const secondaryApp = initializeApp(secondaryConfig,"secondary");
export const secondaryAuth = getAuth(secondaryApp);