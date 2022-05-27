// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQlNQYMra8OVlFnINAR3JslLL3JVBMwck",
    authDomain: "bioji-e5127.firebaseapp.com",
    projectId: "bioji-e5127",
    storageBucket: "bioji-e5127.appspot.com",
    messagingSenderId: "301182112057",
    appId: "1:301182112057:web:a3d3712316df03aaa218e8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;