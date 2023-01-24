import { useState, useEffect } from "react";
import "./App.css";
import {
  FilterContext,
  CharacterContext,
  ToogleContext,
} from "./context/moviesContext";
import CharacterList from "./components/characterList/CharacterList";
import Filter from "./components/filter/Filter";
import CharacterDetail from "./components/characterDetail/CharacterDetail";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [characters, setCharacters] = useState([]);
  const [toggle, setToggle] = useState(null);
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
        <ToogleContext.Provider value={{ toggle, setToggle }}>
          <div className="container">
            <Navbar />
            <div
              className="filter___section"
              style={toggle ? { display: "block" } : { display: "none" }}
            >
              <Filter />
            </div>
            <div className="characterList___section">
              <CharacterList />
            </div>
          </div>
        </ToogleContext.Provider>
        <CharacterDetail />
      </CharacterContext.Provider>
    </FilterContext.Provider>
  );
}
export default App;
