// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCwvmPU7NTrC23SYGUs8HQqGlMJyxpbFh4",
    authDomain: "webpybara.firebaseapp.com",
    projectId: "webpybara",
    storageBucket: "webpybara.appspot.com",
    messagingSenderId: "134247825972",
    appId: "1:134247825972:web:0ca52408cc836ad4734061",
    measurementId: "G-1QGKDGGM7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app); //store database(users, posts)
const storage = getStorage(app); //store images

export {auth, firestore, storage}