import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCz8LB6uyqCSXVvrGAYqmm5zn_0OGD-R-A",
    authDomain: "buddhist-painting.firebaseapp.com",
    projectId: "buddhist-painting",
    storageBucket: "buddhist-painting.appspot.com",
    messagingSenderId: "48868871014",
    appId: "1:48868871014:web:c1fdc17d78d924aa6556a7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export { auth, googleProvider, githubProvider };
