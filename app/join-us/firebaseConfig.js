import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCVxPeAGVVYnHQ7MVDHSc21imor70l8KTY",
    authDomain: "mun-db.firebaseapp.com",
    projectId: "mun-db",
    storageBucket: "mun-db.firebasestorage.app",
    messagingSenderId: "341547566419",
    appId: "1:341547566419:web:86316a77ca7bf2a35dcda6",
    measurementId: "G-MGDF2X12CF"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db, collection, addDoc };