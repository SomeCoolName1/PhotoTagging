import store from "..";
import "./Leaderboard.scss";

const Leaderboard = () => {
  let leaderList;
  const getLeaderboards = store.getState().leaderboard;

  leaderList = getLeaderboards;

  return (
    <div className="LeaderboardContainer">
      {leaderList.map((board) => (
        <div className="leaderList">
          <h4>{board.name}</h4>
          <table>
            <thead style={{ color: "red" }}>
              <th>Name</th>
              <th>Time (s)</th>
            </thead>
            {board.leaders === undefined
              ? ""
              : board.leaders.slice(0, 10).map((entry) => {
                  return (
                    <tbody>
                      <th>{entry.Name}</th>
                      <th>{entry.Time}</th>
                    </tbody>
                  );
                })}
          </table>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
