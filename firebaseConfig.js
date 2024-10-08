// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgrvEokw5zXuUkJpfTl8VNEeQNjBoTflk",
  authDomain: "wellnessapp-98c62.firebaseapp.com",
  databaseURL: "https://wellnessapp-98c62-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wellnessapp-98c62",
  storageBucket: "wellnessapp-98c62.appspot.com",
  messagingSenderId: "991792333141",
  appId: "1:991792333141:web:ad119bd5aa9b3b4aa7efdc",
  measurementId: "G-DWRLVZ4ZPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export { app, auth };