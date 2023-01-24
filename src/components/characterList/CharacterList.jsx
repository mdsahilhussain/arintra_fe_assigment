import { useContext } from "react";
import { CharacterContext } from "../../context/moviesContext";

function CharacterList() {
  const { characters, selectedCharacter, setSelectedCharacter } =
    useContext(CharacterContext);

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div>
      {characters.map((character) => (
        <div
          key={character.name}
          onClick={() => handleSelectCharacter(character)}
        >
          {character.name}
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
