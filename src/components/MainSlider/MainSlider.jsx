import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";

import { mainSliderData } from "./mainSliderData";
import "./MainSlider.scss";

export default function MainSlider() {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{ clickable: true }}
      className="main-slider"
    >
      {mainSliderData.map((slide) => {
        return (
          <SwiperSlide key={slide.id}>
            <div className="main-slider__info">
              <h3 className="main-slider__title">{slide.preTitle}</h3>
              <p className="main-slider__text">{slide.titlePart1}</p>
              <p className="main-slider__text">{slide.titlePart2}</p>
              <p className="main-slider__text">{slide.titlePart3}</p>
              <button className="main-slider__btn">SHOP NOW</button>
            </div>
            <div className="main-slider__camera">
              <img src={slide.img} alt="Camera promo photo" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
