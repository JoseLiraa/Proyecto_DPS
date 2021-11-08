// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD973xO1Dem5KB4UNp0q5QeBTL9x36sfGY",
  authDomain: "login-7f40e.firebaseapp.com",
  projectId: "login-7f40e",
  storageBucket: "login-7f40e.appspot.com",
  messagingSenderId: "312600517141",
  appId: "1:312600517141:web:ce798372c84df65ce78c1c"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth();

export { auth };
export { app }