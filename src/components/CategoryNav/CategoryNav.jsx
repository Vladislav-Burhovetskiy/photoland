import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FilterByPrice from "../FilterByPrice/FilterByPrice";
import { useDataContext } from "../../hooks/useDataContext";
import "./CategoryNav.scss";

export default function CategoryNav({ closeMenu }) {
  const { data } = useDataContext();
  const allCategories = data?.map((item) => item.categories);
  const uniqueCategories = [...new Set(allCategories)];

  return (
    <aside className="nav">
      <div className="nav-title">BROWSE CATEGORIES</div>
      <div className="nav-categories">
        {uniqueCategories.map((category) => (
          <Link
            to={`/photoland/products/${category}`}
            className="nav-category"
            key={category}
          >
            {closeMenu ? (
              <div onClick={() => closeMenu()}>{category}</div>
            ) : (
              category
            )}
          </Link>
        ))}
      </div>
      <div className="nav-filter">
        <FilterByPrice closeMenu={closeMenu}/>
      </div>
    </aside>
  );
}

CategoryNav.propTypes = {
  closeMenu: PropTypes.func,
};
