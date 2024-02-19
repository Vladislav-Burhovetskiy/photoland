import LatestProducts from "../../components/LatestProducts/LatestProducts";
import Hero from "../../components/Hero/Hero";
import useFetch from "../../hooks/useFetch";
import "./Home.scss"

export default function Home() {
  const { data } = useFetch("./api/cameras.json");

  return (
    <section className="home container">
      <Hero />
      <LatestProducts data={data} />
    </section>
  );
}
