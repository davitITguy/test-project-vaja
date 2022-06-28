import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./BannerSection.module.scss";
import Banner from "../../assets/newcollection.jpeg";

// import required modules
import { Navigation } from "swiper";

const BannerSection = () => {
  return (
    <div className="banner">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          {/* <img src={Banner} alt="banner" /> */}
          Slide 1
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner} alt="banner" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default BannerSection;
