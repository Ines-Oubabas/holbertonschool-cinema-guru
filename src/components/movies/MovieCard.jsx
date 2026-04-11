import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClock } from "@fortawesome/free-solid-svg-icons";
import "./movies.css";

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8000/api/titles/favorite/"),
      axios.get("http://localhost:8000/api/titles/watchlater/"),
    ])
      .then(([favoriteResponse, watchLaterResponse]) => {
        const favorites = favoriteResponse.data || [];
        const watchLater = watchLaterResponse.data || [];

        setIsFavorite(
          favorites.some((item) => item.imdbId === movie.imdbId)
        );
        setIsWatchLater(
          watchLater.some((item) => item.imdbId === movie.imdbId)
        );
      })
      .catch((error) => {
        console.error("Movie status request failed:", error);
      });
  }, [movie.imdbId]);

  const handleClick = async (type) => {
    try {
      if (type === "favorite") {
        if (isFavorite) {
          await axios.delete(
            `http://localhost:8000/api/titles/favorite/${movie.imdbId}`
          );
          setIsFavorite(false);
        } else {
          await axios.post(
            `http://localhost:8000/api/titles/favorite/${movie.imdbId}`
          );
          setIsFavorite(true);
        }
      }

      if (type === "watchlater") {
        if (isWatchLater) {
          await axios.delete(
            `http://localhost:8000/api/titles/watchlater/${movie.imdbId}`
          );
          setIsWatchLater(false);
        } else {
          await axios.post(
            `http://localhost:8000/api/titles/watchlater/${movie.imdbId}`
          );
          setIsWatchLater(true);
        }
      }
    } catch (error) {
      console.error("Movie action request failed:", error);
    }
  };

  return (
    <li className="movie-card">
      <div className="movie-card-icons">
        <FontAwesomeIcon
          icon={faHeart}
          className="movie-card-icon"
          onClick={() => handleClick("favorite")}
        />
        <FontAwesomeIcon
          icon={faClock}
          className="movie-card-icon"
          onClick={() => handleClick("watchlater")}
        />
      </div>

      <h3>{movie.title || "Untitled"}</h3>
      <p>{movie.synopsis || "No synopsis available."}</p>

      <ul className="movie-card-genres">
        {(movie.genres || []).map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </li>
  );
}

export default MovieCard;