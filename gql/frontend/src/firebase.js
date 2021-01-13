import firebase from 'firebase/app';
import 'firebase/auth';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAGAK8VnJt6-w-Uc5VcpaA3peNqDtFpG90",
    authDomain: "gqlreactnode-812bb.firebaseapp.com",
    projectId: "gqlreactnode-812bb",
    storageBucket: "gqlreactnode-812bb.appspot.com",
    // messagingSenderId: "94643704174",
    appId: "1:94643704174:web:5e09a1351dbbf857ceb17f",
    measurementId: "G-V02QSD26ME"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
