import { useState } from "react";
import PropTypes from "prop-types";
import Product from "../Product/Product";
import CategoryNav from "../CategoryNav/CategoryNav";
import Pagination from "../Pagination/Pagination";
import SpinnerLoading from "../Spinner/SpinnerLoading";
import { usePaginationContext } from "../../hooks/usePaginationContext";
import "./ProductList.scss";

export default function ProductList({ title, products }) {
  const { currentPage, setCurrentPage } = usePaginationContext();
  const [productPerPage, setProductPerPage] = useState(6);

  if (!products) {
    return <SpinnerLoading />;
  }

  const lastIndexPage = currentPage * productPerPage;
  const firstIndexPage = lastIndexPage - productPerPage;
  const currentProducts =
    products.length > productPerPage
      ? products.slice(firstIndexPage, lastIndexPage)
      : products;
  const numberOfPages = Math.ceil(products.length / productPerPage);

  return (
      <div className="products container">
        <div className="products-category">
          <CategoryNav />
        </div>
        <div className="products-result">
          <h2 className="products-result__title">{title}</h2>
          <div className="products-result__cameras">
            {currentProducts.map((product) => (
              <Product key={product.id} camera={product} />
            ))}
          </div>
          {products.length > productPerPage && (
            <Pagination
              numberOfPages={numberOfPages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
  );
}

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};
