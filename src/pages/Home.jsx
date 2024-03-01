import LatestProducts from "../components/LatestProducts/LatestProducts";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <section className="home container">
      <Hero />
      <LatestProducts />
    </section>
  );
}
