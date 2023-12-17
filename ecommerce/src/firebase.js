import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVZ5Ha3vScboL0vNXP_ESSH-gd_dNfoW8",
  authDomain: "ecommerce-5fb96.firebaseapp.com",
  projectId: "ecommerce-5fb96",
  storageBucket: "ecommerce-5fb96.appspot.com",
  messagingSenderId: "450878925687",
  appId: "1:450878925687:web:4413679b011ae3746b4f72",
  measurementId: "G-Q9C341SR8D",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firestore and Authentication
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
