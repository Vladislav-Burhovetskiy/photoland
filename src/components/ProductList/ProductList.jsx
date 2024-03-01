import PropTypes from "prop-types";
import Product from "../Product/Product";
import CategoryNav from "../CategoryNav/CategoryNav";
import SpinnerLoading from "../Spinner/SpinnerLoading";
import "./ProductList.scss";

export default function ProductList({ title, products }) {

  if (!products) {
    return <SpinnerLoading />;
  }

  return (
      <div className="products container">
        <div className="products-category">
          <CategoryNav />
        </div>
        <div className="products-result">
          <h2 className="products-result__title">{title}</h2>
          <div className="products-result__cameras">
            {products.map((product) => (
              <Product key={product.id} camera={product} />
            ))}
          </div>
        </div>
      </div>
  );
}

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};
