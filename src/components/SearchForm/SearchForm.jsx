import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import "./SearchForm.scss";

export default function SearchForm({ closeMenu }) {
  const navigate = useNavigate("");
  const [inputValue, setInputValue] = useState("");
  const [isAnimating, setIsAnimating] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timeout);
  });

  const handleSearchInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      navigate(`/photoland/search?query=${inputValue}`);
      setInputValue("");
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
        value={inputValue}
      />
      {closeMenu ? (
        <button
          className="search-btn"
          onClick={() => inputValue && closeMenu()}
        >
          <FiSearch />
        </button>
      ) : (
        <button className="search-btn">
          <FiSearch />
        </button>
      )}
    </form>
  );
}

SearchForm.propTypes = {
  closeMenu: PropTypes.func,
};
