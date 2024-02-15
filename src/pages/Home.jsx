import ProductSlider from "../components/ProductSlider";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const { data } = useFetch("./api/cameras.json");
  console.log(data);

  return (
    <div>
      <ProductSlider data={data}/>
    </div>
  );
}
