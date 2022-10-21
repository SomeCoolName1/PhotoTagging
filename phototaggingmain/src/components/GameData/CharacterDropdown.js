import "./CharacterDropdown.scss";
import * as React from "react";
import { Navigate } from "react-router-dom";

const CharacterDropDown = ({ clickLocation, characterList, checkCoords }) => {
  if (characterList === undefined) {
    return <Navigate to="/" replace={true} />;
  }

  const createStyle = {
    position: "absolute",
    left: clickLocation ? clickLocation[0] : null,
    top: clickLocation ? clickLocation[1] : null,
  };

  return (
    <div
      className="dropDownContainer"
      id="dropDownContainer"
      style={createStyle}
    >
      {characterList.map((character) => {
        return (
          <div
            className="characterContainer"
            onClick={() => checkCoords(character.name)}
          >
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterDropDown;
