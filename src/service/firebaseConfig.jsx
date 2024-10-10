// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6L_0_Ze12U9Gy6ECMnPPQDZ83ftANWHg",
  authDomain: "myprojects-3e6ce.firebaseapp.com",
  projectId: "myprojects-3e6ce",
  storageBucket: "myprojects-3e6ce.appspot.com",
  messagingSenderId: "386786359441",
  appId: "1:386786359441:web:89bb8ac380cf056b83a730"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);