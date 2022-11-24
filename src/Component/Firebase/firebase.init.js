// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVusuh3sIkIQxuSFvRiL5545OPapftssA",
    authDomain: "machineries-sells.firebaseapp.com",
    projectId: "machineries-sells",
    storageBucket: "machineries-sells.appspot.com",
    messagingSenderId: "772503776915",
    appId: "1:772503776915:web:c4c51197173cdd444e2766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;