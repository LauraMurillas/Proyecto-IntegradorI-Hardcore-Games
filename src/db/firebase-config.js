
// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { setPersistence, browserSessionPersistence } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeua7Tf0Bw8SopO8HuE8sEM1hKaGI_zxk",
  authDomain: "gabriel-adventures.firebaseapp.com",
  projectId: "gabriel-adventures",
  storageBucket: "gabriel-adventures.appspot.com",
  messagingSenderId: "453371070766",
  appId: "1:453371070766:web:fb437f72a1a1970f3dd2bf"
};

// Initialize Firebase
export const fireBaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(fireBaseApp);
export const db = getFirestore(fireBaseApp);

setPersistence(auth, browserSessionPersistence)
