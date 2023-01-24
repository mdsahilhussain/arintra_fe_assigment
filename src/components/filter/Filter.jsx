import { useContext } from "react";
import { FilterContext, CharacterContext } from "../../context/moviesContext";

function Filter() {
  const { filter, setFilter } = useContext(FilterContext);
  const { setCharacters } = useContext(CharacterContext);

  const handleInputChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const handleApplyFilter = () => {
    let queryParams = "";
    if (filter.selectedMovie) {
      queryParams += `&film=${filter.selectedMovie}`;
    }
    if (filter.selectedSpecies) {
      queryParams += `&species=${filter.selectedSpecies}`;
    }
    if (filter.birthYearRange.start && filter.birthYearRange.end) {
      queryParams += `&birth_year_range=${filter.birthYearRange.start},${filter.birthYearRange.end}`;
    }
    // call the API with the query parameters
    console.log(queryParams)
    fetch(`https://swapi.py4e.com/api/people?${queryParams}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      });
  };

  return (
    <div>
      <select
        name="selectedMovie"
        value={filter.selectedMovie}
        onChange={handleInputChange}
      >
        <option value="">All</option>
        <option value="Episode IV">Episode IV: A New Hope</option>
        <option value="Episode V">Episode V: The Empire Strikes Back</option>
        {/* Add more options for the other movies */}
      </select>
      <input
        type="text"
        name="selectedSpecies"
        value={filter.selectedSpecies}
        onChange={handleInputChange}
      />
      <input
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
      />
      <button onClick={handleApplyFilter}>Apply Filter</button>
    </div>
  );
}

export default Filter;
