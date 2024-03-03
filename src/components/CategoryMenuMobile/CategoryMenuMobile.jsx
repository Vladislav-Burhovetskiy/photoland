import PropTypes from "prop-types";
import SearchForm from "../SearchForm/SearchForm";
import CategoryNav from "../CategoryNav/CategoryNav";
import { FiX } from "react-icons/fi";
import "./CategoryMenuMobile.scss";

export default function CategoryMenuMobile({ openMenu }) {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__fix-container">
        <FiX onClick={openMenu} className="mobile-menu__fix" />
      </div>
      <div className="mobile-menu__search">
        <SearchForm openMenu={openMenu} />
      </div>
      <CategoryNav openMenu={openMenu} />
    </div>
  );
}

CategoryMenuMobile.propTypes = {
  openMenu: PropTypes.func,
};
