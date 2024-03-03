import PropTypes from "prop-types";
import ProductSlider from "../ProductSlider/ProductSlider";
import { useDataContext } from "../../hooks/useDataContext";
import "./RelatedProduct.scss";

export default function RelatedProduct({ category }) {
  const { data } = useDataContext();

  const productsCategory = data?.filter(
    (camera) => camera.categories === category
  );
  return (
    <div>
      <h2 className="related-title">Related Products</h2>
      <ProductSlider data={productsCategory} />
    </div>
  );
}

RelatedProduct.propTypes = {
  category: PropTypes.string,
};
