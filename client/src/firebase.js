// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mascarinoinmob-1dcb3.firebaseapp.com",
  projectId: "mascarinoinmob-1dcb3",
  storageBucket: "mascarinoinmob-1dcb3.appspot.com",
  messagingSenderId: "159833027313",
  appId: "1:159833027313:web:805467c903fde86714af50",
  measurementId: "G-429KH85ZY7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);