import PropTypes from "prop-types";
import ProductSlider from "../ProductSlider/ProductSlider";
import { useDataContext } from "../../hooks/useDataContext";
import "./LatestProducts.scss";

export default function LatestProducts() {
  const { data } = useDataContext();
  const isNewCamera = data?.filter((product) => product.isNew);

  return (
    <div className="latest-products">
      <div>
        <h2 className="latest-products__title">Latest Products</h2>
      </div>
      <ProductSlider data={isNewCamera} />
    </div>
  );
}

LatestProducts.propTypes = {
  data: PropTypes.array,
};
