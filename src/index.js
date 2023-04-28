// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
// import { getAnalytics } from "firebase/analytics";
// import {getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCg6AsLPct_qFGm1eUvBYLb-7qHC3t33rA",
    authDomain: "csc-firebase-app.firebaseapp.com",
    projectId: "csc-firebase-app",
    storageBucket: "csc-firebase-app.appspot.com",
    messagingSenderId: "911710783408",
    appId: "1:911710783408:web:c0229d31550e0761bb7875",
    measurementId: "G-YDGCPFB2Y1"
});

// Initialize Firebase
// const app = initializeApp(firebaseApp);
// const analytics = getAnalytics(app);
const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);
// const todosCollection = collection(db, 'todos');
// const snapshot = await getDocs(todosCollection);

// Detects Authentication State
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('IT\s logged in!');
    } else {
        console.log('IT\s logged out!');
    }
});

//https://www.youtube.com/watch?v=rQvOAnNvcNQ&list=PLyYBH-6qH2mJKmNhQXTihjlZbS2aQKXvq&index=1





//https://github.com/firebase/firebase-tools/issues/1627