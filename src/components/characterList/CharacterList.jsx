import { useContext } from "react";
import "./characterList.css";
import { CharacterContext } from "../../context/moviesContext";

function CharacterList() {
  const { characters, selectedCharacter, setSelectedCharacter } =
    useContext(CharacterContext);

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="characterlist">
      <div className="characterlist___card">
        <ul>
          {characters.map((character, index) => (
            <li key={index} onClick={() => handleSelectCharacter(character)}>
              <h3>{character.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CharacterList;
