import { collection, addDoc } from "firebase/firestore/lite";
import store from "../..";
import db from "./firebase";

const SubmitEntry = async (name, time, board) => {
  const collectionRef = collection(db, board);
  await addDoc(collectionRef, {
    Name: name,
    Time: time,
  });
  store.dispatch({ type: "update/leaderboards" });
};

export default SubmitEntry;
