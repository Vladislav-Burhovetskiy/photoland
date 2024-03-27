import PropTypes from "prop-types";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./FilterByPrice.scss";

export default function FilterByPrice({ closeMenu }) {
  // const navigate = useNavigate("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleSelectChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  return (
    <div>
      <select
        value={selectedPrice}
        onChange={handleSelectChange}
        className="price-select"
      >
        <option value="" selected>
          Select price options...
        </option>
        <option value="option1">All cameras</option>
        <option value="option2">0-799 $</option>
        <option value="option3">800-2000 $</option>
        <option value="option4">2000+ $</option>
      </select>
    </div>
  );
}

FilterByPrice.propTypes = {
  closeMenu: PropTypes.func,
};

// const handleSubmit = (e) => {
//   e.preventDefault();

//   if (inputValue.trim() !== "") {
//     navigate(`/photoland/search?query=${inputValue}`);
//     setInputValue("");
//   } else {
//     setIsAnimating(true);
//   }
// };
