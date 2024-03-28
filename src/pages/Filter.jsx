import { useLocation } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";
import { useDataContext } from "../hooks/useDataContext";

export default function Filter() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  const { data } = useDataContext();

  const filteredCameras = data?.filter((product) => {
    if (minPrice && !maxPrice) {
      return product.price > minPrice;
    } else if (minPrice && maxPrice) {
      return product.price > minPrice && product.price < maxPrice;
    } else {
      return product;
    }
  });

  const resultTitle =
    filteredCameras?.length > 0
      ? `Found ${filteredCameras.length} results for this filter`
      : `No results found for this filter`;

  return (
    filteredCameras && (
      <ProductList title={resultTitle} products={filteredCameras} />
    )
  );
}
