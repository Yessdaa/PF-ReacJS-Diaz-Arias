// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyhqykBJkXDJgxrnVWeo-UzJNGa5WOucI",
  authDomain: "yessanime-85bba.firebaseapp.com",
  projectId: "yessanime-85bba",
  storageBucket: "yessanime-85bba.appspot.com",
  messagingSenderId: "948057724196",
  appId: "1:948057724196:web:77dc518b6b4bcc3f804fb1",
  measurementId: "G-KMEN8NPPS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//npm install firebase

//npm install -g firebase-tools

//firebase login

//firebase init

//firebase deploy