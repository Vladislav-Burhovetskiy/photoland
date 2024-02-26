import { useLocation } from "react-router-dom";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Product from "../../components/Product/Product";
import useFetch from "../../hooks/useFetch";
import "./Search.scss";

export default function Search() {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const searchTerm = searchParam.get("query");

  const { data } = useFetch("./api/cameras.json");

  const searchCameras = data?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search container">
      <div className="search-category">
        <CategoryNav />
      </div>
      <div className="search-cameras">
        {searchCameras?.map((product) => (
          <Product key={product.id} camera={product} />
        ))}
      </div>
    </div>
  );
}
