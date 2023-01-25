import { useContext } from "react";
import "./characterList.css";
import { CharacterContext } from "../../context/moviesContext";
import { Link } from "react-router-dom";

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
            <Link to="/detail" key={index} state={{ index: index }}>
              <li onClick={() => handleSelectCharacter(character)}>
                <h3>{character.name}</h3>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CharacterList;
