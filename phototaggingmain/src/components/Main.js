import "../components/Main.scss";
import { Link } from "react-router-dom";
import { LevelData } from "./GameData/LevelData";

const Main = ({ setLevel }) => {
  const levelBoards = LevelData.map((game) => {
    const level = game.level;
    const board = game.board;
    const name = game.name;
    return (
      <Link to="/gameboard" className="GameSelectionCards" key={name}>
        <div onClick={() => setLevel(game)}>
          <div className="nameOverlay">{name}</div>
          <img src={board} alt={name} />
        </div>
      </Link>
    );
  });

  return (
    <div className="MainContainer">
      <div className="GameSelectContainer">{levelBoards}</div>
    </div>
  );
};

export default Main;
