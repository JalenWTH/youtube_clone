// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBtkw5imTUE4FMCBLy3pZfKUbFyLiu41I",
  authDomain: "clone-913dd.firebaseapp.com",
  projectId: "clone-913dd",
  storageBucket: "clone-913dd.appspot.com",
  messagingSenderId: "38419974316",
  appId: "1:38419974316:web:71244a12bb4ce499193709",
  measurementId: "G-166RTGZFWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);