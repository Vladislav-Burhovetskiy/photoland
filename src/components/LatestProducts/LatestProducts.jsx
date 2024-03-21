import PropTypes from "prop-types";
import { useDataContext } from "../../hooks/useDataContext";
import "./LatestProducts.scss";
import { lazy, Suspense } from "react";

const ProductSlider = lazy(() => {
  return import("../ProductSlider/ProductSlider");
});

export default function LatestProducts() {
  const { data } = useDataContext();
  const isNewCamera = data?.filter((product) => product.isNew);

  return (
    <div className="latest-products">
      <div>
        <h2 className="latest-products__title">Latest Products</h2>
      </div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <ProductSlider data={isNewCamera} />
      </Suspense>
    </div>
  );
}

LatestProducts.propTypes = {
  data: PropTypes.array,
};
