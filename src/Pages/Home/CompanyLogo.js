import React from 'react';
import { Link } from 'react-router-dom';
import { Endpoints } from '../../API/Endpoints';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export default function CompanyLogo({ data }) {

    return (
        <div className="container">
            <div className="post-block-wrapper mb-50">


                <div className="head black-head d-flex justify-content-between">

                    <div>
                        <h4 className="title text-dark">{"Featured Companies"}</h4>
                    </div>
                    <div className="text-end text-dark">
                        <Link to={"/featured-vendors"}>
                        <h4 className="title text-dark">
                                View More
                            </h4>
                        </Link>
                    </div>




                </div>



                <div className="instagram-section section p-2">
                    <div>


                        <div className="m-2 d-flex ">
                            <Swiper
                                slidesPerView={6}
                                spaceBetween={5}
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
                                    '@1.50': {
                                        slidesPerView: 4,
                                        spaceBetween: 40,
                                    },
                                    '@2.00': {
                                        slidesPerView: 5,
                                        spaceBetween: 50,
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
                                    if (index > 10) return null;
                                    return (
                                        <SwiperSlide>
                                            <div className="text-center logo-slider-img p-2">
                                                <Link className="instagram-item" to={"/feature/" + item?.url} key={index}><img src={Endpoints.ImageUrl + item?.featured_company_logo} alt="" className="company-logo" /></Link>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>



                        </div>
                    </div>
                    <div className="container-fluid ps-0 pe-0">

                        <div className=" m-2 mt-3  d-flex" >
                            <Swiper
                                slidesPerView={6}
                                spaceBetween={5}
                                dir="rtl"
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
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
                                    '@1.50': {
                                        slidesPerView: 4,
                                        spaceBetween: 40,
                                    },
                                    '@2.00': {
                                        slidesPerView: 5,
                                        spaceBetween: 50,
                                    },

                                }}
                                loop={true}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                {data.map((item, index) => {
                                    if (index < 10 || index > 30) return null;
                                    return (
                                        <SwiperSlide>
                                            <div className="text-center logo-slider-img p-2">
                                                <Link className="instagram-item" to={"/feature/" + item?.url} key={index}><img src={Endpoints.ImageUrl + item?.featured_company_logo} alt="" className="company-logo" /></Link>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>



                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
