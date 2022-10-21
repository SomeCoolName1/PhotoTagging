import "./App.css";
import {
  BrowserRouter,
  Routes,
  Link,
  Route,
  Router,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header.js";
import Main from "./components/Main";
import GameBoard from "./components/GameBoard";
import { useEffect, useState } from "react";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [selectedLevel, setLevel] = useState(false);
  const [gameOver, setGame] = useState(false);
  const [timer, setTimer] = useState(0);

  //Perform sideeffect when current location changes
  //returns current location object
  const location = useLocation();

  useEffect(() => {
    setGame(false);
    setTimer(0);
  }, [location]);

  useEffect(() => {
    let counter;
    if (!gameOver && location.pathname === "/gameboard") {
      counter = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else if (gameOver) {
      clearInterval(counter);
    }
    return () => {
      clearInterval(counter);
    };
  }, [location, gameOver]);

  return (
    <div className="app">
      <Header timer={timer} />
      <Routes>
        <Route exact path="/" element={<Main setLevel={setLevel} />} />
        <Route
          exact
          path="/gameboard"
          element={
            <GameBoard level={selectedLevel} setGame={setGame} timer={timer} />
          }
        />
        <Route exact path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;
