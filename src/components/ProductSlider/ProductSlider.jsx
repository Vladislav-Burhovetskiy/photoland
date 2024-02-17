import PropTypes from "prop-types";
import Product from "../Product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./ProductSlider.scss";

export default function ProductSlider({ data }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      loop={false}
      navigation={true}
      spaceBetween={28}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
      pagination={{ clickable: true }}
      className="productSlider"
    >
      {data?.map(
        (camera) =>
          camera.isNew && (
            <SwiperSlide key={camera.id}>
              <Product camera={camera} />
            </SwiperSlide>
          )
      )}
    </Swiper>
  );
}

ProductSlider.propTypes = {
  data: PropTypes.array,
};
