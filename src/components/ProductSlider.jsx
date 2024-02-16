import PropTypes from "prop-types";
import Product from "./Product";
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
      spaceBetween={30}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        560: {
          slidesPerView: 2,
        },
        780: {
          slidesPerView: 3,
        },
        1020: {
          slidesPerView: 4,
        },
        1260: {
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
