import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const videos = [
  "https://www.youtube.com/embed/4HYKLY7hXr4",
  "https://www.youtube.com/embed/Py4zrERAV8s",
  "https://www.youtube.com/embed/yh670QHDISw",
  "https://www.youtube.com/embed/EUEB1sx_RwM",
  "https://www.youtube.com/embed/IIW_DYprilc",
];
export default function Video() {
  return (
    <div className="mb-50">
      <div className="post-block-wrapper mb-50">
        <div className="head black-head">
          <h4 className="title text-dark">{"Featured Videos"}</h4>
        </div>
        <div className="body">
          <div className="">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {videos.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="post post-overlay gadgets-post bg-dark overflow-hidden">
                    <div className="post-wrap">
                      {
                        <iframe
                          width="370"
                          height="250"
                          src={item}
                          frameBorder="0"
                          allow="encrypted-media; picture-in-picture"
                          title={`YouTube video player - video ${index}`}
                        ></iframe>
                      }
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
