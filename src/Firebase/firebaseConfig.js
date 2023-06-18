// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSCufb1CKvwZt3vxVQLlgHWxfX8HuGi48",
  authDomain: "food-delivery-app-6d807.firebaseapp.com",
  projectId: "food-delivery-app-6d807",
  storageBucket: "food-delivery-app-6d807.appspot.com",
  messagingSenderId: "870140015320",
  appId: "1:870140015320:web:95dc1437e4e2dad31dddad",
  measurementId: "G-7BNZ488NRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);