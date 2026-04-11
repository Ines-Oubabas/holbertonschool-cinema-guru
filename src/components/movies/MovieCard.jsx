import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClock } from "@fortawesome/free-solid-svg-icons";
import "./movies.css";

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  const authConfig = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  useEffect(() => {
    const fetchMovieStatus = async () => {
      try {
        const [favoriteResponse, watchLaterResponse] = await Promise.all([
          axios.get("http://localhost:8000/api/titles/favorite/", authConfig),
          axios.get("http://localhost:8000/api/titles/watchLater/", authConfig),
        ]);

        const favorites = favoriteResponse.data || [];
        const watchLater = watchLaterResponse.data || [];

        setIsFavorite(favorites.some((item) => item.imdbId === movie.imdbId));
        setIsWatchLater(
          watchLater.some((item) => item.imdbId === movie.imdbId)
        );
      } catch (error) {
        console.error("Movie status request failed:", error);
      }
    };

    fetchMovieStatus();
  }, [movie.imdbId]);

  const handleClick = async (type) => {
    try {
      if (type === "favorite") {
        if (isFavorite) {
          await axios.delete(
            `http://localhost:8000/api/titles/favorite/${movie.imdbId}`,
            authConfig
          );
          setIsFavorite(false);
        } else {
          await axios.post(
            `http://localhost:8000/api/titles/favorite/${movie.imdbId}`,
            {},
            authConfig
          );
          setIsFavorite(true);
        }
      }

      if (type === "watchlater") {
        if (isWatchLater) {
          await axios.delete(
            `http://localhost:8000/api/titles/watchlater/${movie.imdbId}`,
            authConfig
          );
          setIsWatchLater(false);
        } else {
          await axios.post(
            `http://localhost:8000/api/titles/watchlater/${movie.imdbId}`,
            {},
            authConfig
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
          className={`movie-card-icon ${isFavorite ? "active" : ""}`}
          onClick={() => handleClick("favorite")}
        />
        <FontAwesomeIcon
          icon={faClock}
          className={`movie-card-icon ${isWatchLater ? "active" : ""}`}
          onClick={() => handleClick("watchlater")}
        />
      </div>

      {movie.imageurls?.[0] && (
        <img
          src={movie.imageurls[0]}
          alt={movie.title || "Movie poster"}
          className="movie-card-image"
        />
      )}

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