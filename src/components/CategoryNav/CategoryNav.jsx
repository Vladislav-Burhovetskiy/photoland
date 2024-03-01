import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDataContext } from "../../hooks/useDataContext";
import "./CategoryNav.scss";

export default function CategoryNav({ openMenu }) {
  const { data } = useDataContext();
  const allCategories = data?.map((item) => item.categories);
  const uniqueCategories = [...new Set(allCategories)];

  return (
    <aside className="nav">
      <div className="nav-title">BROWSE CATEGORIES</div>
      <div className="nav-categories">
        {uniqueCategories.map((category) => (
          <Link to={`/photoland/products/${category}`} className="nav-category" key={category} onClick={openMenu}>
            {category}
          </Link>
        ))}
      </div>
    </aside>
  );
}

CategoryNav.propTypes = {
  openMenu: PropTypes.func,
};
