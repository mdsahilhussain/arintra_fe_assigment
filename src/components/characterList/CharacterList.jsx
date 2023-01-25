import { useContext } from "react";
import "./characterList.css";
import { CharacterContext, ToogleContext } from "../../context/moviesContext";
import { Link } from "react-router-dom";

function CharacterList() {
  const { characters, selectedCharacter, setSelectedCharacter } =
    useContext(CharacterContext);
  const { navtoggle, setNavtoggle } = useContext(ToogleContext);

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
  };
  const toggleHandler = () => {
    setNavtoggle(false);
  };

  return (
    <div className="characterlist">
      <div className="characterlist___card">
        <ul>
          {characters.map((character, index) => (
            <Link to="/detail" key={index} state={{ index: index }}>
              <li
                onClick={(e) => {
                  handleSelectCharacter(character);
                  toggleHandler();
                }}
              >
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
