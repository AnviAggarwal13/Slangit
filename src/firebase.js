// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBOIMZjpOqU7U-dbX1fKhs0vIyZUT9bMqA",
  authDomain: "chat-84744.firebaseapp.com",
  projectId: "chat-84744",
  storageBucket: "chat-84744.appspot.com",
  messagingSenderId: "467934669701",
  appId: "1:467934669701:web:26e5134fe49556aaba72ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db= getFirestore();
