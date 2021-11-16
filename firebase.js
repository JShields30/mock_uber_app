// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBauqi79-cbL2zoDBjRtUEPH6xwpkpjpLs",
  authDomain: "mock-uber-app.firebaseapp.com",
  projectId: "mock-uber-app",
  storageBucket: "mock-uber-app.appspot.com",
  messagingSenderId: "388088388294",
  appId: "1:388088388294:web:25da311547ae12d68395c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth }