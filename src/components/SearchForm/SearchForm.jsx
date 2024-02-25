import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SearchForm.scss";

export default function SearchForm() {
  const navigate = useNavigate("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      setSearchTerm("");
    } else {
      alert("Please search for something...");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        onChange={handleSearchInput}
        type="text"
        placeholder="Search for the product..."
        className="search-input"
      />
      <button className="search-btn">
        <FiSearch />
      </button>
    </form>
  );
}
