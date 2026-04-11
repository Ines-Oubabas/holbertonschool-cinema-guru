import { useEffect, useState } from "react";
import axios from "axios";
import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard";
import Filter from "../../components/movies/Filter";
import Button from "../../components/general/Button";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  const loadMovies = async (pageNumber) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/titles/advancedsearch",
        {
          params: {
            minYear,
            maxYear,
            genres,
            title,
            sort,
            page: pageNumber,
          },
        }
      );

      if (pageNumber === 1) {
        setMovies(response.data || []);
      } else {
        setMovies((prev) => [...prev, ...(response.data || [])]);
      }
    } catch (error) {
      console.error("Advanced search request failed:", error);
    }
  };

  useEffect(() => {
    setPage(1);
    loadMovies(1);
  }, [minYear, maxYear, genres, sort, title]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadMovies(nextPage);
  };

  return (
    <div className="dashboard-main">
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        sort={sort}
        setSort={setSort}
        genres={genres}
        setGenres={setGenres}
        title={title}
        setTitle={setTitle}
      />

      <ul className="movies-grid">
        {movies.map((movie, index) => (
          <MovieCard key={movie.imdbId || index} movie={movie} />
        ))}
      </ul>

      <Button label="Load More.." onClick={handleLoadMore} />
    </div>
  );
}

export default HomePage;