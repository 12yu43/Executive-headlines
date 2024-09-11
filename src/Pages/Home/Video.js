import React from 'react';
import { Endpoints } from '../../API/Endpoints';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Video({ data }) {

  return (
    <div className=" mb-50">


      <div className="post-block-wrapper mb-50">


        <div className="head black-head ">


          <h4 className="title text-dark">{"Featured Videos"}</h4>

        </div>
        <div className="body">
          <div className=""
          >
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },

              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {data.map((item, index) => {
                return (
                  <SwiperSlide>
                    <div className="" key={index}>

                      <div className="post post-overlay gadgets-post bg-dark ">
                        <div className="post-wrap">

                          <a href={Endpoints.ImageUrl + item?.video} className="image video-popup" target={"_blank"}>
                            <video width="370" height="250" src={Endpoints.ImageUrl + item?.video}>

                            </video>

                            <span className="video-btn"><i className="fa fa-play"></i></span>
                          </a>


                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>


          </div>
        </div>
      </div>
    </div>
  )
}
