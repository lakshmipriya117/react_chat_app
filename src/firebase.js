// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUPWf2Gj14YCczlXuiVtkhVk11TvJ38Oo",
  authDomain: "chat-app-d7a7f.firebaseapp.com",
  projectId: "chat-app-d7a7f",
  storageBucket: "chat-app-d7a7f.appspot.com",
  messagingSenderId: "197647770143",
  appId: "1:197647770143:web:db66deb43680ec719dab2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

