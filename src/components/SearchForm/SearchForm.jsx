import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SearchForm.scss";

export default function SearchForm() {
  const navigate = useNavigate("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isAnimating, setIsAnimating] = useState("");
  const searchInput = document.querySelectorAll("input");

  useEffect(() => {
    const timeout = setTimeout(() => setIsAnimating(false), 1000);

    return () => clearTimeout(timeout);
  });

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);

      // i use 2 search-input
      searchInput[0].value = "";
      searchInput[1].value = "";
      setSearchTerm("");
    } else {
      setIsAnimating(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`search-form ${isAnimating && "shake"}`}
    >
      <input
        id="search-input"
        onChange={handleSearchInput}
        type="text"
        placeholder="Search by camera brand (Canon, Nikon, Sony...)"
        className="search-input"
      />
      <button className="search-btn">
        <FiSearch />
      </button>
    </form>
  );
}