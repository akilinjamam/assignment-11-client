// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAytSWj8fR-xbtJHrhtED0pd3cYBCZx_ng",
    authDomain: "exertion-7d317.firebaseapp.com",
    projectId: "exertion-7d317",
    storageBucket: "exertion-7d317.appspot.com",
    messagingSenderId: "935973117592",
    appId: "1:935973117592:web:2f1cd74adc9db0a64a7aed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth