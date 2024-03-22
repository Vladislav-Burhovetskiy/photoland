import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDataContext } from "../../hooks/useDataContext";
import "./CategoryNav.scss";

export default function CategoryNav({ closeMenu }) {
  console.log(closeMenu);
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
            <div onClick={closeMenu ? () => closeMenu() : undefined}>
              {category}
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}

CategoryNav.propTypes = {
  closeMenu: PropTypes.func,
};
