import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  const [toggle, setToggle] = useState(false);
  const [navtoggle, setNavtoggle] = useState(true);
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
        setCharacters(data.results);
      });
  }, []);

  return (
    <Router>
      <FilterContext.Provider value={{ filter, setFilter }}>
        <CharacterContext.Provider
          value={{
            characters,
            setCharacters,
            selectedCharacter,
            setSelectedCharacter,
          }}
        >
          <ToogleContext.Provider
            value={{ toggle, setToggle, navtoggle, setNavtoggle }}
          >
            <div className="container">
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <div
                        className="filter___section"
                        style={
                          toggle ? { display: "block" } : { display: "none" }
                        }
                      >
                        <Filter />
                      </div>
                      <div className="characterList___section">
                        <CharacterList />
                      </div>
                    </>
                  }
                />
                <Route path="/detail" element={<CharacterDetail />} />
              </Routes>
            </div>
          </ToogleContext.Provider>
        </CharacterContext.Provider>
      </FilterContext.Provider>
    </Router>
  );
}
export default App;
