import PropTypes from "prop-types";
import SearchForm from "../SearchForm/SearchForm";
import CategoryNav from "../CategoryNav/CategoryNav";
import { FiX } from "react-icons/fi";
import "./CategoryMenuMobile.scss";

export default function CategoryMenuMobile({ closeMenu }) {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__fix-container">
        <FiX onClick={closeMenu} className="mobile-menu__fix" />
      </div>
      <div className="mobile-menu__search">
        <SearchForm openMenu={closeMenu} />
      </div>
      <CategoryNav openMenu={closeMenu} />
    </div>
  );
}

CategoryMenuMobile.propTypes = {
  closeMenu: PropTypes.func,
};
