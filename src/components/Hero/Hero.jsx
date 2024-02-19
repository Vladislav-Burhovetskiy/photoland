import PropTypes from "prop-types";
import CategoryNav from "../CategoryNav/CategoryNav";
import MainSlider from "../MainSlider/MainSlider";
import SalePromo from "../SalePromo/SalePromo";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div>
          <CategoryNav />
        </div>
        <div>
          <MainSlider />
        </div>
        <SalePromo />
      </div>
    </section>
  );
}

Hero.propTypes = {
  data: PropTypes.array,
};
