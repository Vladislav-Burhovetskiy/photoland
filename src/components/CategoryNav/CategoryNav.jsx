// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./CategoryNav.scss";

export default function CategoryNav() {
  const { data } = useFetch("./api/cameras.json");
  const allCategories = data?.map((item) => item.categories);
  const uniqueCategories = [...new Set(allCategories)];

  console.log(uniqueCategories);
  return (
    <aside className="nav">
      <div className="nav-title">BROWSE CATEGORIES</div>
      <div className="nav-categories">
        {uniqueCategories.map((category) => (
          <Link to={`products/${category}`} className="nav-category" key={category}>
            {category}
          </Link>
        ))}
      </div>
    </aside>
  );
}
