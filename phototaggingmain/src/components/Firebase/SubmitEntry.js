import {
  getFirestore,
  collection,
  getDocs,
  doc,
  addDoc,
} from "firebase/firestore/lite";
import db from "./firebase";

const SubmitEntry = async (name, time) => {
  console.log("submit entry", name, time);
  const collectionRef = collection(db, "Leaderboard");
  await addDoc(collectionRef, {
    Name: name,
    Time: time,
  });
};

export default SubmitEntry;
