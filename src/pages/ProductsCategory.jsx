import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";
import { useDataContext } from "../hooks/useDataContext";

export default function ProductsCategory() {
  const { category } = useParams();
  const { data } = useDataContext();

  const categoryCameras = data?.filter(
    (product) => product.categories === category
  );

  const resultTitle = `${category} cameras`;

  return <ProductList title={resultTitle} products={categoryCameras} />;
}
