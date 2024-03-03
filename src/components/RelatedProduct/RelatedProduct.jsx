import ProductSlider from "../ProductSlider/ProductSlider";
import { useDataContext } from "../../hooks/useDataContext";
import { useParams } from "react-router-dom";
import "./RelatedProduct.scss";

export default function RelatedProduct() {
  const { id } = useParams();
  const { data } = useDataContext();

  const productsCategory = data?.filter(
    (camera) => camera.categories === data[id - 1].categories
  );
  return (
    <div>
      <h2 className="related-title">Related Products</h2>
      <ProductSlider data={productsCategory} />
    </div>
  );
}
