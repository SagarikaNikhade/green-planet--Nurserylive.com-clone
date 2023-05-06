import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyB6K2UZM2DR8ZFqIV3O2_XTjRhMe0sm9Eo",
  authDomain: "green-planet-0405.firebaseapp.com",
  projectId: "green-planet-0405",
  storageBucket: "green-planet-0405.appspot.com",
  messagingSenderId: "541153085817",
  appId: "1:541153085817:web:730d7cda461758d4f687a8",
  measurementId: "G-PYD28EJDTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};