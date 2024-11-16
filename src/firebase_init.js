// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM73aFjQ3-3nWH3YBjXw2HUk8nKUxWJ4E",
  authDomain: "dragon-news-react-5c988.firebaseapp.com",
  projectId: "dragon-news-react-5c988",
  storageBucket: "dragon-news-react-5c988.firebasestorage.app",
  messagingSenderId: "85802199299",
  appId: "1:85802199299:web:02646a716a75451ca12136"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;