import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDzD1d6Y_CbzntqIngZflgFU68Ct2SESxs",
  authDomain: "photo-tagging-ab10e.firebaseapp.com",
  projectId: "photo-tagging-ab10e",
  storageBucket: "photo-tagging-ab10e.appspot.com",
  messagingSenderId: "857137676596",
  appId: "1:857137676596:web:4d285caf83e7234a8d6561",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
