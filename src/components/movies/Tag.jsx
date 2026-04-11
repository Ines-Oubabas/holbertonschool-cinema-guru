import { useState } from "react";
import "./movies.css";

function Tag({ genre, filter, genres, setGenres }) {
  const [selected, setSelected] = useState(false);

  const handleTag = () => {
    if (selected) {
      setGenres(genres.filter((item) => item !== genre));
      setSelected(false);
    } else {
      setGenres([...genres, genre]);
      setSelected(true);
    }
  };

  return (
    <li
      className={`movie-tag ${selected ? "selected" : ""}`}
      onClick={handleTag}
    >
      {genre}
    </li>
  );
}

export default Tag;