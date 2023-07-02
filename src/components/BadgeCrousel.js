import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/swiper-bundle.min.css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const BadgeCrousel = ({ badge }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      effect={"fade"}
      breakpoints={{
        200: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper center"
    >
      {badge &&
        badge?.map((data) => {
          // console.log(data.From);
          return (
            <SwiperSlide key={data._id}>
              <a href={data.Completion} target="_blank">
                <img
                  className="responsiveImage m_auto grow"
                  src={data.From}
                  alt="Badge Images"
                  border="0"
                />
              </a>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default BadgeCrousel;
