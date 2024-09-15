import React from 'react';
import { Link } from 'react-router-dom';
import { Endpoints } from '../../API/Endpoints';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Magazine({ magazineData }) {
    return (
        <div className="popular-section section bg-dark ">
            <div className="px-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="mt-100 pt-50 text-white w-100 d-none d-md-block">
                            <h1 className="text-white ml-0"> <span style={{ color: "red", fontSize: "1.8rem" }}>Business Magazine</span> </h1>
                            <p style={{
                                fontSize: "20px"
                            }}>
                                Inspiring stories, instructive interviews and life changing strategies.
                            </p>
                        </div>

                        <div className="mt-40 text-white w-100 d-md-none d-sm-block">
                            <h3 className="text-white mt-2 mb-2">Business Magazine</h3>
                            <p style={{
                                fontSize: "20px"
                            }} className="mt-2 mb-3">
                                Inspiring stories, instructive interviews and life changing strategies.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-8 py-3">
                        <div className="">
                            <Swiper
                                slidesPerView={3}  // Display 3 slides at a time
                                spaceBetween={10}  // Adjust space between slides as needed
                                speed={750}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                {magazineData.slice(0, 4).map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="post">
                                                <div className="post-wrap">
                                                    <Link className="image" to={"/magazine/" + item?.url}>
                                                        <img
                                                            src={Endpoints.ImageUrl + item?.magazine_cover_image}
                                                            alt="post"
                                                            className="magazine-image"
                                                        />
                                                    </Link>
                                                </div>

                                                <div className="post-wrap magazine-title p-0" style={{ paddingTop: '0px' }}>
                                                    <Link to={"/magazine/" + item?.url}>
                                                        <h6 className="text-white">{item?.issue_title}</h6>
                                                    </Link>
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
    )
}
