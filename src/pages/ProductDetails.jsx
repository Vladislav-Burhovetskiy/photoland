import { useParams } from "react-router-dom";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import RelatedProduct from "../components/RelatedProduct/RelatedProduct";
import { useDataContext } from "../hooks/useDataContext";
import SpinnerLoading from "../components/Spinner/SpinnerLoading";

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading } = useDataContext();

  if (isLoading) {
    return <SpinnerLoading />;
  }

  const camera = data?.find((product) => {
    return product.id === +id;
  });

  return (
    <div className="container">
      <ProductInfo camera={camera} />
      <RelatedProduct category={camera.categories}/>
    </div>
  );
}
