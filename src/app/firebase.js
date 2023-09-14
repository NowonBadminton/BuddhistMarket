import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz8LB6uyqCSXVvrGAYqmm5zn_0OGD-R-A",
    authDomain: "buddhist-painting.firebaseapp.com",
    projectId: "buddhist-painting",
    storageBucket: "buddhist-painting.appspot.com",
    messagingSenderId: "48868871014",
    appId: "1:48868871014:web:c1fdc17d78d924aa6556a7"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword};