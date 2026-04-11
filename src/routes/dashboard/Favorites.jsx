import { useEffect, useState } from "react";
import axios from "axios";
import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard";

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/titles/favorite/")
      .then((response) => {
        setMovies(response.data || []);
      })
      .catch((error) => {
        console.error("Favorites request failed:", error);
      });
  }, []);

  return (
    <div className="dashboard-main">
      <h1>Movies you like</h1>

      <ul className="movies-grid">
        {movies.map((movie, index) => (
          <MovieCard key={movie.imdbId || index} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default Favorites;