import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "whatedu-project.firebaseapp.com",
  projectId: "whatedu-project",
  storageBucket: "whatedu-project.appspot.com",
  messagingSenderId: "566776762785",
  appId: "1:566776762785:web:2b977f2e97c82b1dbe3be0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage  = getStorage()