// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZmg3wLsVK_9z6PQpUjeEvsS3vkzvZz1A",
  authDomain: "portfolio-e135f.firebaseapp.com",
  projectId: "portfolio-e135f",
  storageBucket: "portfolio-e135f.appspot.com",
  messagingSenderId: "353530031971",
  appId: "1:353530031971:web:f45f91688b66d38efded56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;