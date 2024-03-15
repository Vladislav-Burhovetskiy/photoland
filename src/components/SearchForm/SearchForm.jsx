import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SearchForm.scss";

export default function SearchForm({ openMenu }) {
  const navigate = useNavigate("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isAnimating, setIsAnimating] = useState("");

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
      navigate(`/photoland/search?query=${searchTerm}`);
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
        onChange={handleSearchInput}
        type="text"
        placeholder="Search by camera brand (Canon, Nikon, Sony...)"
        value={searchTerm}
        className="search-input"
      />
      <button className="search-btn" onClick={openMenu}>
        <FiSearch />
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  openMenu: PropTypes.func,
};
