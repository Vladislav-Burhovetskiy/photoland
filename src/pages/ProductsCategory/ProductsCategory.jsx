import useFetch from "../../hooks/useFetch";

export default function ProductsCategory() {
  const { data } = useFetch("./api/cameras.json");

  return (
    <div>
      <h3>Products by category</h3>
    </div>
  );
}
