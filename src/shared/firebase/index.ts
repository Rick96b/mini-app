import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBW5DDvcDiYBsuZdPlbmyN6WosObBohMhQ",
  authDomain: "arkaim-5bed5.firebaseapp.com",
  projectId: "arkaim-5bed5",
  storageBucket: "arkaim-5bed5.appspot.com",
  messagingSenderId: "662704638881",
  appId: "1:662704638881:web:cec6f9e20605544a3f59e0",
  measurementId: "G-BYQ06THHR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);