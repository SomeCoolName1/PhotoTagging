import { useState, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import "./GameBoard.scss";
import CharacterDropDown from "./GameData/CharacterDropdown";
import fireWorks from "../assets/fireworks/fireworks.gif";
import SubmitEntry from "./Firebase/SubmitEntry";
import { useNavigate } from "react-router-dom";

const GameBoard = ({ level, setGame, timer }) => {
  const ref = useRef();
  const { events } = useDraggable(ref);
  const board = level.board;
  const characterList = level.characters;
  const navigate = useNavigate();

  const [clickLocation, setClickLocation] = useState(false);
  const [menuCoords, setMenuCoords] = useState(false);
  const [characters, setCharacters] = useState(characterList);

  function getClick(e) {
    let xClick = e.nativeEvent.offsetX;
    let yClick = e.nativeEvent.offsetY;

    const xCoord = (xClick / e.nativeEvent.target.offsetWidth) * 100;
    const yCoord = (yClick / e.nativeEvent.target.offsetHeight) * 100;

    setMenuCoords([xClick, yClick]);
    setClickLocation([xCoord, yCoord]);
  }

  function checkCoordsOnClick(selectedChar) {
    const getCharacter = characterList.find((char) => {
      return char.name === selectedChar;
    });

    const [clickedXCoords, clickedYCoords] = clickLocation;
    const characterCoords = getCharacter.location;

    const foundCharacter =
      withinLocationRange(clickedXCoords, characterCoords[0]) &&
      withinLocationRange(clickedYCoords, characterCoords[1]);

    if (foundCharacter) {
      setCharacters(
        characters.filter((char) => char.name !== getCharacter.name)
      );
      playFunFireworks();
      if (checkWin()) {
        setGame(true);
      }
    }
  }

  function withinLocationRange(clickedCoords, characterCoords) {
    //Checks if click is within 2% of circle range of character
    if (
      characterCoords - 2 <= clickedCoords &&
      clickedCoords <= characterCoords + 2
    ) {
      return true;
    } else return false;
  }

  function checkWin() {
    const getForm = document.getElementById("formOverlay");
    if (characters.length === 1) {
      getForm.style.display = "block";
      return true;
    }
  }

  function playFunFireworks() {
    const getFireworks = document.getElementsByClassName("fireworksGif");

    for (let i = 0; i < getFireworks.length; i++) {
      getFireworks[i].style.display = "block";

      setTimeout(() => {
        getFireworks[i].style.display = "none";
      }, 500);
    }
  }

  function dropDownToggle() {
    let getDropDown = document.getElementById("dropDownContainer");
    getDropDown.style.visibility =
      getDropDown.style.visibility === "hidden" ? "visible" : "hidden";
  }

  function getFormInputs(e) {
    e.preventDefault();

    const getNameInput = document.getElementById("nameInput").value;

    SubmitEntry(getNameInput, timer, level.name);

    navigate("/leaderboard");
  }

  return (
    <div>
      <div id="formOverlay" className="formOverlay">
        <form
          id="inputForm"
          className="inputForm"
          onSubmit={(e) => getFormInputs(e)}
        >
          <h1>Congratulations! You've found them all</h1>
          <div>Time: {timer} seconds</div>
          <div>
            <label for="name">Name: </label>
            <input type="text" name="name" id="nameInput" required />{" "}
          </div>
          <input type="submit" />
        </form>
      </div>
      <div
        className="ImageContainer"
        {...events}
        ref={ref}
        onClick={() => dropDownToggle()}
      >
        <CharacterDropDown
          clickLocation={menuCoords}
          characterList={characters}
          checkCoords={checkCoordsOnClick}
        />
        <img src={board} id="boardImage" onClick={getClick} alt="board" />
        <img
          src={fireWorks}
          id="fireworksGifLeft"
          className="fireworksGif"
          alt="fireworksGif"
        />
        <img
          src={fireWorks}
          id="fireworksGifRight"
          className="fireworksGif"
          alt="fireworksGif"
        />
      </div>
    </div>
  );
};

export default GameBoard;

{
  /* <button id="submitButton" onClick={(e) => getFormInputs(e)}>
            Submit
          </button> */
}
