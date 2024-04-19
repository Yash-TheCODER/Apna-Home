// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-ee3d8.firebaseapp.com",
  projectId: "real-estate-ee3d8",
  storageBucket: "real-estate-ee3d8.appspot.com",
  messagingSenderId: "926082831469",
  appId: "1:926082831469:web:55a8307c146de1e8c41b64"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);