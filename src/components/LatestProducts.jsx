import PropTypes from "prop-types";
import ProductSlider from "./ProductSlider";
import "./LatestProducts.scss"

export default function LatestProducts({ data }) {
  return (
    <div className="latest-products">
      <div>
        <h2 className="latest-products__title">Latest Products</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
}

LatestProducts.propTypes = {
  data: PropTypes.array,
};
