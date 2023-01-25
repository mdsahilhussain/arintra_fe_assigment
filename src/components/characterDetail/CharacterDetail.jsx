import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CharacterContext } from "../../context/moviesContext";
import "./characterDetail.css";
import BiggsDarklighter from "../../assets/Biggs Darklighter.jpeg";
import ObiWanKenobi from "../../assets/Obi-Wan Kenobi.jpg";
import R5D4 from "../../assets/R5-D4.jpeg";
import BeruWhitesunLars from "../../assets/Beru Whitesun Lars.jpeg";
import OwenLars from "../../assets/Owen Lars.jpg";
import LeiaOrgana from "../../assets/Leia Organa.jpg";
import DarthVader from "../../assets/Darth Vader.jpg";
import R2D2 from "../../assets/R2-D2.jpg";
import C3PO from "../../assets/C-3PO.jpg";
import LukeSkywalker from "../../assets/Luke Skywalker.jpg";
const array = [
  LukeSkywalker,
  C3PO,
  R2D2,
  DarthVader,
  LeiaOrgana,
  OwenLars,
  BeruWhitesunLars,
  R5D4,
  ObiWanKenobi,
  BiggsDarklighter,
];
function CharacterDetail() {
  const { selectedCharacter } = useContext(CharacterContext);
  const [movies, setMovies] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setSpestarships] = useState([]);
  const location = useLocation();
  const imgId = location.state.index;

  const fetchMoviesData = async () => {
    try {
      const response = await Promise?.all(
        selectedCharacter?.films?.map((url) =>
          fetch(url).then((res) => res.json())
        )
      );
      setMovies(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSpeciesData = async () => {
    try {
      const response = await Promise?.all(
        selectedCharacter?.species?.map((url) =>
          fetch(url).then((res) => res.json())
        )
      );
      setSpecies(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchStarshipsData = async () => {
    try {
      const response = await Promise?.all(
        selectedCharacter?.starships?.map((url) =>
          fetch(url).then((res) => res.json())
        )
      );
      setSpestarships(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMoviesData();
    fetchSpeciesData();
    fetchStarshipsData();
  }, [selectedCharacter]);

  return (
    <div className="characterDetail">
      <div className="characterDetail___image">
        <img src={array[imgId]} alt={selectedCharacter?.name} />
      </div>
      {selectedCharacter && (
        <div className="characterDetail___card">
          <h1>{selectedCharacter?.name}</h1>
          <h1>{selectedCharacter?.index}</h1>
          <div className="characterDetail___species ">
            <p>Species: </p>
            <ul>
              {species?.map((item, index) => (
                <li key={index}>
                  <h3>{item?.name}</h3>
                </li>
              ))}
            </ul>
          </div>
          <div className="characterDetail___movies ">
            <p>Movies: </p>
            <ul>
              {movies?.map((item, index) => (
                <li key={index}>
                  <h3>Episode ID {item?.episode_id}</h3>
                </li>
              ))}
            </ul>
          </div>
          <div className="characterDetail___spaceships ">
            <p>Spaceships: </p>
            <ul>
              {starships?.map((item, index) => (
                <li key={index}>
                  <h3>{item?.name ?? "It does not have a spaceship."}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default CharacterDetail;
