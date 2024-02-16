import LatestProducts from "../../components/LatestProducts/LatestProducts";
import useFetch from "../../hooks/useFetch";
import "./Home.scss"

export default function Home() {
  const { data } = useFetch("./api/cameras.json");
  console.log(data);

  return (
    <section className="home">
      <LatestProducts data={data} />
    </section>
  );
}
