import { useParams } from "react-router-dom";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import RelatedProduct from "../components/RelatedProduct/RelatedProduct";
import { useDataContext } from "../hooks/useDataContext";
import findById from "../helpers/findById.js";
import SpinnerLoading from "../components/Spinner/SpinnerLoading";

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading } = useDataContext();

  if (isLoading) {
    return <SpinnerLoading />;
  }

  const camera = findById(data, +id);

  return (
    <div className="container">
      <ProductInfo camera={camera} />
      <RelatedProduct category={camera.categories}/>
    </div>
  );
}
