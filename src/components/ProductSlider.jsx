import PropTypes from "prop-types";
import Product from "./Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
// import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default function ProductSlider({ data }) {
  return (
    <h3>Product</h3>
  );
}

ProductSlider.propTypes = {
  data: PropTypes.array,
};
