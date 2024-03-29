import { useLocation } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";
import { useDataContext } from "../hooks/useDataContext";

export default function Search() {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const searchTerm = searchParam.get("query");

  const { data } = useDataContext();

  const searchCameras = data?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const resultTitle =
    searchCameras?.length > 0
      ? `${searchCameras.length} results for "${searchTerm}"`
      : `No results found for "${searchTerm}"`;

  return <ProductList title={resultTitle} products={searchCameras} />;
}
