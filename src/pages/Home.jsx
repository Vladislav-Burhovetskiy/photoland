import LatestProducts from "../components/LatestProducts/LatestProducts";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <LatestProducts />
    </div>
  );
}
