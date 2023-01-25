import { createContext } from "react";

export const FilterContext = createContext({
  selectedMovie: "",
  selectedSpecies: "",
  birthYearRange: {
    start: "",
    end: "",
  },
  setFilter: () => {},
});

export const ToogleContext = createContext({
  toggle: false,
  setToggle: () => {},
  navtoggle: true,
  setNavtoggle: () => {},
});

export const CharacterContext = createContext({
  characters: [],
  selectedCharacter: null,
  setCharacters: () => {},
  setSelectedCharacter: () => {},
});
