import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDbNQaKDnzbgRdjdMdfdsJw-1TI_D1Au3I",
  authDomain: "wasim-portfolio.firebaseapp.com",
  projectId: "wasim-portfolio",
  storageBucket: "wasim-portfolio.appspot.com",
  messagingSenderId: "203743346555",
  appId: "1:203743346555:web:da483e2b616a82d418c7de",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
