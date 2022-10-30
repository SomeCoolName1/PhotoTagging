import "../components/Main.scss";

import { Link } from "react-router-dom";

const Header = ({ timer }) => {
  return (
    <div className="HeaderContainer">
      <Link to="/">
        <h2>
          Where's <span style={{ color: "red" }}>Waldo?</span>
        </h2>
      </Link>
      <div className="rightSide">
        <Link to="/leaderboard">Leaderboard</Link>
        <div>Timer: {timer}s</div>
      </div>
    </div>
  );
};

export default Header;
