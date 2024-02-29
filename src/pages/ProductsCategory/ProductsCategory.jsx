import { useParams } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import useFetch from "../../hooks/useFetch";

export default function ProductsCategory() {
  const { category } = useParams();
  const { data } = useFetch("./api/cameras.json");

  const categoryCameras = data?.filter(
    (product) => product.categories === category
  );

  const resultTitle = `${category} cameras`;

  return <ProductList title={resultTitle} products={categoryCameras} />;
}
