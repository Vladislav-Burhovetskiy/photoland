import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePaginationContext } from "../../hooks/usePaginationContext";
import {
  addToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../../helpers/localStorage.js";
import "./FilterByPrice.scss";

export default function FilterByPrice({ closeMenu }) {
  const { setCurrentPage } = usePaginationContext();
  const [selectedPrice, setSelectedPrice] = useState(
    getFromLocalStorage("filter") || ""
  );
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    addToLocalStorage("filter", selectedValue);
    setSelectedPrice(selectedValue);
    setCurrentPage(1);

    selectedValue
      ? navigate(`/photoland/filter?${selectedValue}`)
      : navigate(`/photoland/`);

    closeMenu && closeMenu();
  };

  useEffect(() => {
    removeFromLocalStorage("filter");
  }, [selectedPrice]);

  return (
    <div>
      <select
        value={selectedPrice}
        onChange={handleSelectChange}
        className="price-filter__select"
      >
        <option value="">Select price options...</option>
        <option value="minPrice=&maxPrice=">All cameras</option>
        <option value="minPrice=0&maxPrice=799">0 - 799 $</option>
        <option value="minPrice=800&maxPrice=2000">800 - 2000 $</option>
        <option value="minPrice=2000&maxPrice=">2000 + $</option>
      </select>
    </div>
  );
}

FilterByPrice.propTypes = {
  closeMenu: PropTypes.func,
};
