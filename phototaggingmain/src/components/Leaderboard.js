import db from "./Firebase/firebase";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
} from "firebase/firestore/lite";
import "./Leaderboard.scss";
import { useEffect, useState } from "react";
import { async } from "@firebase/util";

const Leaderboard = () => {
  const [leaders, setLeaderList] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const leaderCollection = collection(db, "Leaderboard");
      const leaderSnapshot = await getDocs(leaderCollection);
      const leaderList = leaderSnapshot.docs.map((doc) => doc.data());
      setLeaderList(leaderList);
    };
    fetchLeaderboard();
  }, []);

  const sortRankings = () => {
    leaders.sort((a, b) => a.Time - b.Time);
  };

  sortRankings();
  return (
    <div className="LeaderboardContainer">
      <table>
        <tr style={{ color: "red" }}>
          <th>Name</th>
          <th>Time (s)</th>
        </tr>
        {leaders.slice(0, 10).map((entry) => {
          return (
            <tr>
              <th>{entry.Name}</th>
              <th>{entry.Time}</th>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Leaderboard;
