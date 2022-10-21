import "../components/Main.scss";
import { Link } from "react-router-dom";

const Header = ({ timer }) => {
  return (
    <div className="HeaderContainer">
      <Link to="/">
        <h1>
          Where Them <span style={{ color: "red" }}>Cunts?</span>
        </h1>
      </Link>
      <div>
        <Link to="/leaderboard">Leaderboard</Link>
        <div>Timer: {timer}s</div>
      </div>
    </div>
  );
};

export default Header;
