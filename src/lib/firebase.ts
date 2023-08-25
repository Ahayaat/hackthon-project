import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7tgDJ7btsV1CNctKFsNBNZZE3p9PjNbY",
  authDomain: "ecommerce-website-86b81.firebaseapp.com",
  projectId: "ecommerce-website-86b81",
  storageBucket: "ecommerce-website-86b81.appspot.com",
  messagingSenderId: "560292287",
  appId: "1:560292287:web:fb6cf431c4204adcbc410a",
  measurementId: "G-S45GYGEV9J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
