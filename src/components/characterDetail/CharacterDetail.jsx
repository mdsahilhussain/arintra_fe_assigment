import { useContext } from 'react';
import { CharacterContext } from '../../context/moviesContext';

function CharacterDetail() {
  const { selectedCharacter } = useContext(CharacterContext);

  return (
    <div>
      {selectedCharacter && (
        <div>
          <h2>{selectedCharacter.name}</h2>
          <p>Species: {selectedCharacter.species}</p>
          <p>Movies: {selectedCharacter.films.join(", ")}</p>
          <p>Spaceships: {selectedCharacter.starships.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default CharacterDetail