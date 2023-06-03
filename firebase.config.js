// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHD65UWQiTOmZjR4onGR2PkpxIK1L3t8s",
  authDomain: "bistro-boss-restaurant-c8530.firebaseapp.com",
  projectId: "bistro-boss-restaurant-c8530",
  storageBucket: "bistro-boss-restaurant-c8530.appspot.com",
  messagingSenderId: "323606374180",
  appId: "1:323606374180:web:d5d3fdc9ccfda666d1b5b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;