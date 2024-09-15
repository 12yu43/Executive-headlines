import React from 'react';
import { Endpoints } from '../../API/Endpoints';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function LeaderSpeaks({ Data }) {

    return (
        <div className="row d-none d-md-block mb-50 ">
            <div className="col-lg-12 col-12 d-flex">
                <div className="post-block-wrapper">
                    <div className="head video-head">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h4 className="title">Client Success is Our Success</h4>
                            </div>
                            <div className="text-end">
                                <h4 className="title px-5 mx-2"> Client Testimonials</h4>

                            </div>
                        </div>



                    </div>
                    <div className="body">
                        <div className="row">
                            <div>
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
                                    {Data.map((item, index) => {
                                        if (index > 8) return null;
                                        return (
                                          <SwiperSlide className="" key={index}>
                                            <div
                                              class="col-md-6 col-sm-6 col-xs-6 even-grid-item tss-grid-item  default-margin tss-img-circle w-100"
                                              role="group"
                                              aria-label="1 / 3"
                                            >
                                              <div
                                                class="single-item-wrapper mt-2 w-100 p-2"
                                                style={{
                                                  minHeight: "430px",
                                                  maxHeight: "430px",
                                                }}
                                              >
                                                <div class="tss-meta-info">
                                                  <div class="profile-img-wrapper ">
                                                    <img
                                                      src={
                                                        Endpoints.ImageUrl +
                                                        item?.image
                                                      }
                                                      class="rounded-circle "
                                                      width="75"
                                                      height="75"
                                                      alt="" />
                                                  </div>
                                                </div>
                                                <div class="text-center mt-4">
                                                  <i class="fa fa-star"></i>
                                                  <i class="fa fa-star"></i>
                                                  <i class="fa fa-star"></i>
                                                  <i class="fa fa-star"></i>
                                                  <i class="fa fa-star"></i>
                                                </div>
                                                <h3 class="author-name text-center mt-2">
                                                  {item.client_name}
                                                </h3>
                                                <h4 class="author-name text-center mt-2">
                                                  {item.client_position}
                                                </h4>
                                                <h5 class="author-name text-center mt-2">
                                                  {item.company_name}
                                                </h5>

                                                <div class="item-content-wrapper mt-3">
                                                  <div class="item-content text-clamp-6">
                                                    {item.message}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
