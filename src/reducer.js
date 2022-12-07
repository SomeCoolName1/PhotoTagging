import { LevelData } from "./components/GameData/LevelData";
import db from "../src/components/Firebase/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

const initialState = {
  leaderboard: LevelData,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "update/leaderboards":
      state.leaderboard.forEach(async (board) => {
        let name = board.name;
        const leaderCollection = collection(db, name);
        const leaderSnapshot = await getDocs(leaderCollection);

        const leaderList = leaderSnapshot.docs.map((doc) => doc.data());

        const sortList = leaderList.sort((a, b) => a.Time - b.Time);

        board.leaders = sortList;
      });
      return { ...state };
    default:
      return state;
  }
};

export default Reducer;
