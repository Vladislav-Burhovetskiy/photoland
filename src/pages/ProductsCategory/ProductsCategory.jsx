import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import SpinnerLoading from "../../components/Spinner/SpinnerLoading";
import useFetch from "../../hooks/useFetch";
import "./ProductsCategory.scss";

export default function ProductsCategory() {
  const { category } = useParams();
  const { data, isLoading } = useFetch("./api/cameras.json");

  if (isLoading) {
    return <SpinnerLoading />;
  }

  const categoryCameras = data?.filter(
    (product) => product.categories === category
  );

  const resultTitle = `${category} cameras`;

  return (
    <div className="products container">
      <div className="products-category">
        <CategoryNav />
      </div>
      <div className="products-result">
        <h2 className="products-result__title">{resultTitle}</h2>
        <div className="products-result__cameras">
          {categoryCameras?.map((product) => (
            <Product key={product.id} camera={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
