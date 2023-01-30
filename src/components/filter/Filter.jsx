import { useContext, useState } from "react";
import { FilterContext, CharacterContext } from "../../context/moviesContext";
import Button from "../button/Button";
import "./filter.css";
function Filter() {
  const { filter, setFilter } = useContext(FilterContext);
  const { setCharacters, characters } = useContext(CharacterContext);
  const [speciesCharacter, setSpeciesChatacter] = useState([]);
  const species = [
    "human",
    "droid",
    "wookiee",
    "rodian",
    "hutt",
    "yoda's species",
    "trandoshan",
    "mon calamari",
    "ewok",
    "sullustan",
  ];

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const handleApplyFilter = async () => {
    console.log("handleApplyFilter");
    if (filter.selectedSpecies) {
      const getSpecies = filter.selectedSpecies.toLowerCase();
      const Id = species.indexOf(getSpecies) + 1;
      console.log(Id);
      fetch(`https://swapi.py4e.com/api/species/${Id}`)
        .then((response) => response.json())
        .then((data) => {
          setSpeciesChatacter(data.people);
        });
    }

    try {
      const response = await Promise?.all(
        speciesCharacter?.map((url) => fetch(url).then((res) => res.json()))
      );
      setCharacters(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fiter">
      <select
        name="selectedMovie"
        value={filter.selectedMovie}
        onChange={handleInputChange}
        className="radio__button"
      >
        <option value="">All</option>
        <option value="Episode IV">Episode IV: A New Hope</option>
        <option value="Episode V">Episode V: The Empire Strikes Back</option>
        {/* Add more options for the other movies */}
      </select>
      {console.log(speciesCharacter)}
      {console.log(characters)}
      <input
        type="text"
        name="selectedSpecies"
        value={filter.selectedSpecies}
        onChange={handleInputChange}
      />
      {/* <input
        type="number"
        name="birthYearRange.start"
        value={filter.birthYearRange.start}
        onChange={handleInputChange}
        placeholder="Start"
      />
      <input
        type="number"
        name="birthYearRange.end"
        value={filter.birthYearRange.end}
        onChange={handleInputChange}
        placeholder="End"
      /> */}
      <div onClick={(e) => handleApplyFilter()}>
        <Button name="Apply Filter" />
      </div>
    </div>
  );
}

export default Filter;

// if (filter.selectedMovie) {
//   const getSpecies = filter.selectedSpecies.toLowerCase();
//   const Id = species.indexOf(getSpecies) + 1;
//   console.log(Id);
//   fetch(`https://swapi.py4e.com/api/species/${Id}`)
//     .then((response) => response.json())
//     .then((data) => {
//       setSpeciesChatacter(data.people);
//     });
// }
// queryParams += `&film=${filter.selectedMovie}`;
// if (filter.selectedSpecies) {
//   queryParams += `&species=${filter.selectedSpecies}`;
// }
// if (filter.birthYearRange.start && filter.birthYearRange.end) {
//   queryParams += `&birth_year_range=${filter.birthYearRange.start},${filter.birthYearRange.end}`;
// }
// call the API with the query parameters
// console.log("queryParams", queryParams);
// fetch(`https://swapi.py4e.com/api/people?${queryParams}`)
//   .then((response) => response.json())
//   .then((data) => {
//     setCharacters(data.results);
//     console.log(data.results);
//   });
