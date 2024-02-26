import useFetch from "../../hooks/useFetch";

export default function Products() {
  const { data } = useFetch("./api/cameras.json");

  const photoEl = data.map((item) => {
    return <img key={item.id} src={item.image} alt={item.title} />;
  });

  return (
    <div>
      <h3>Products</h3>
      {photoEl}
    </div>
  );
}
