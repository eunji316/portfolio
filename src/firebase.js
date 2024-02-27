// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV6yJEFN-V_qBUXDzB8YXzTPyH095c5-M",
  authDomain: "portfolio-9a644.firebaseapp.com",
  projectId: "portfolio-9a644",
  storageBucket: "portfolio-9a644.appspot.com",
  messagingSenderId: "980619073687",
  appId: "1:980619073687:web:92ec80e2aa3f4634a2f1d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;