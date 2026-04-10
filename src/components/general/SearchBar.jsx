import "./general.css";

function SearchBar({ title, setTitle }) {
  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <input
      className="general-search"
      type="text"
      value={title}
      onChange={handleInput}
      placeholder="Search..."
    />
  );
}

export default SearchBar;