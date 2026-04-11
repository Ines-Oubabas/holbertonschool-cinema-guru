import "./movies.css";
import SearchBar from "../general/SearchBar";
import Input from "../general/Input";
import SelectInput from "../general/SelectInput";
import Tag from "./Tag";

function Filter({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) {
  const allGenres = [
    "action",
    "drama",
    "comedy",
    "biography",
    "romance",
    "thriller",
    "war",
    "history",
    "sport",
    "sci-fi",
    "documentary",
    "crime",
    "fantasy",
  ];

  return (
    <div className="movies-filter">
      <div className="movies-filter-top">
        <SearchBar title={title} setTitle={setTitle} />

        <Input
          label="Min Date:"
          type="number"
          value={minYear}
          setValue={setMinYear}
        />

        <Input
          label="Max Date:"
          type="number"
          value={maxYear}
          setValue={setMaxYear}
        />

        <SelectInput
          label="Sort:"
          options={["latest", "oldest", "highestrated", "lowestrated"]}
          value={sort}
          setValue={setSort}
        />
      </div>

      <ul className="movies-tags">
        {allGenres.map((genre) => (
          <Tag
            key={genre}
            genre={genre}
            filter={true}
            genres={genres}
            setGenres={setGenres}
          />
        ))}
      </ul>
    </div>
  );
}

export default Filter;