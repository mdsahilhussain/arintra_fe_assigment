import { useState, useEffect } from "react";
import { FilterContext, CharacterContext } from "./context/moviesContext";
import CharacterList from "./components/characterList/CharacterList";
import Filter from "./components/filter/Filter";
import CharacterDetail from "./components/characterDetail/CharacterDetail";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState({
    selectedMovie: "",
    selectedSpecies: "",
    birthYearRange: {
      start: "",
      end: "",
    },
  });
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    fetch("https://swapi.py4e.com/api/people")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCharacters(data.results);
      });
  }, []);

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      <CharacterContext.Provider
        value={{ characters, selectedCharacter, setSelectedCharacter }}
      >
        <Filter />
        <CharacterList />
        <CharacterDetail />
      </CharacterContext.Provider>
    </FilterContext.Provider>
  );
}
export default App;
