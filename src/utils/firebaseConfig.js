// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkRglKq7jaX4A60bpraYQWXYfBodDmwtM",
  authDomain: "guitar2amp.firebaseapp.com",
  projectId: "guitar2amp",
  storageBucket: "guitar2amp.appspot.com",
  messagingSenderId: "755505991017",
  appId: "1:755505991017:web:0b46b2cfa61c56211bc1f8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);