// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Auth, browserSessionPersistence, getAuth, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyX02EXETIAa6-oI9beRew2jOITTEOwC4",
    authDomain: "tailornest.firebaseapp.com",
    projectId: "tailornest",
    storageBucket: "tailornest.firebasestorage.app",
    messagingSenderId: "218248826255",
    appId: "1:218248826255:web:eb15e33f7586de27014ffa",
    measurementId: "G-LDJV95D1NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Session persistence set to browser session.");
  })
  .catch((error) => {
    console.error("Error setting session persistence:", error);
  });


export {auth};
