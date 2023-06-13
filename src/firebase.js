// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC3mGt2EtGsDZxRN3Lj5imMLANy3qnQqb8",
  authDomain: "chat-ef4d9.firebaseapp.com",
  projectId: "chat-ef4d9",
  storageBucket: "chat-ef4d9.appspot.com",
  messagingSenderId: "308687868674",
  appId: "1:308687868674:web:5ea8db9d134f3260fca81b",
  measurementId: "G-LT2JXX92G6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db= getFirestore();
