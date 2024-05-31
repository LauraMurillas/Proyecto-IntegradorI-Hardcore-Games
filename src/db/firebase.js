// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS-0Iz5RSDRKzTYZoVJRwPqvAAAPVWLDI",
  authDomain: "hardcoregames-pi.firebaseapp.com",
  projectId: "hardcoregames-pi",
  storageBucket: "hardcoregames-pi.appspot.com",
  messagingSenderId: "793125659214",
  appId: "1:793125659214:web:388e2eb30b3f7720d2d91f",
  measurementId: "G-ZG2KLWGXZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db }; 