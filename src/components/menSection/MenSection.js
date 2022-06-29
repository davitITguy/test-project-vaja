import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./MenSection.module.scss";

// import required modules
import { Pagination } from "swiper";

import Clothes from "../../assets/clothes.png";
import Footwear from "../../assets/footwear.png";
import HandBags from "../../assets/handbags.png";

const MenSection = () => {
  return (
    <div className="men-section">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Clothes} alt="Clothes" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Footwear} alt="Footwear" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HandBags} alt="Hand bags" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Clothes} alt="Clothes" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Footwear} alt="Footwear" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HandBags} alt="Hand bags" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default MenSection;
