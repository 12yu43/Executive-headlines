import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Magazine from "./Magazine";
import { FetchApi } from "../../API/FetchApi";
import { Endpoints } from "../../API/Endpoints";
import CoverStory from "./CoverStory";
import FeaturedLeaders from "./FeaturedLeaders";
import StartupInsights from "./StartupInsights";
import News from "./News";
import LeaderSpeaks from "./LeaderSpeaks";
import CompanyLogo from "./CompanyLogo";
import Video from "./Video";
import Sport from "./Sport";
import NewNews from "./NewNews";
import Follow from "./Follow";
import Banner from "./Banner";
import Subscribe from "./Subscribe";
import Contact from "./Contact";
import { Helmet } from "react-helmet";
import Image from "../../Layout/Image";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Loader from "../Loader/Index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const $ = window.jQuery;
export default function Index() {
  const [techonologyData, setTechonologyData] = useState([]);
  const [IndustriesData, setIndustriesData] = useState([]);
  const [BusinessNewsData, setBusinessNewsData] = useState([]);
  const [magazineData, setMagazineData] = useState([]);
  const [CoverStorydata, setCoverStoryData] = useState([]);
  const [FeaturedLeadersdata, setFeaturedLeadersData] = useState([]);
  const [startupInsightData, setStartupInsightData] = useState([]);
  const [BannerData, setBannerData] = useState([]);
  const [VideoData, setVideoData] = useState([]);
  const [ClientSpeakData, setClientSpeakData] = useState([]);

  const [SportsData, setSportsData] = useState([]);
  const [LifeStyleData, setLifeStyleData] = useState([]);
  const [EntrepreneursData, setEntrepreneursData] = useState([]);
  const [EntertainmentMediaData, setEntertainmentMediaData] = useState([]);
  const [AwardsEventsData, setAwardsEventsData] = useState([]);
  const [loader, setLoader] = useState(false);

  const param = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [param?.slug, location.pathname]);

  useEffect(() => {
    handleGetTechonology();
  }, []);

  const handleGetTechonology = async () => {
    setLoader(true);
    try {
      let resp = await FetchApi(Endpoints.GetHome);
      if (resp && resp.status === true) {
        setTechonologyData(resp?.data?.technology);
        setIndustriesData(resp?.data?.industry);
        setBusinessNewsData(resp?.data?.business);
        setMagazineData(resp?.data?.magazine?.data);
        setCoverStoryData(resp?.data?.cover_story);
        setFeaturedLeadersData(resp?.data?.featured_people?.data);
        setStartupInsightData(resp?.data?.startup_insight);
        setBannerData(resp?.data?.banner);
        setVideoData(resp?.data?.video);
        setClientSpeakData(resp?.data?.client_speak?.data);
        setSportsData(resp?.data?.news?.sports?.data);
        setLifeStyleData(resp?.data?.news?.life_style?.data);
        setEntrepreneursData(resp?.data?.news?.entrepreneurs?.data);
        setEntertainmentMediaData(resp?.data?.news?.entertainment_media?.data);
        setAwardsEventsData(resp?.data?.news?.awards_events?.data);
        setLoader(false);
      }
    } catch (e) {
      if (e && e.response && e.response.data && e.response.data.message) {
        console.log(e.response.data.message);
      }
    }
  };
  useEffect(() => {
    /*--
            Scroll Up
        -----------------------------------*/
    $.scrollUp({
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade",
      scrollText: '<i class="fa fa-angle-up"></i>',
    });
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Helmet>
            <title>Best Online Business Magazine & News Headlines</title>
          </Helmet>
          <div className="hero-section section fix">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col">
                  <div className="d-flex">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={0}
                      speed={750}
                      breakpoints={{
                        "@0.00": {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        "@0.75": {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        "@1.00": {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                      }}
                      autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      modules={[Autoplay]}
                      className="mySwiper"
                    >
                      {techonologyData.map((item, index) => {
                        if (index > 1) return null;
                        return (
                          <SwiperSlide
                              // className="col-lg-4 col-md-6 col-12"
                            key={index}
                          >
                            <div className="post post-large post-overlay hero-post">
                              <div className="post-wrap">
                                <div className="image">
                                  <Image
                                    Image={Endpoints.ImageUrl + item?.images}
                                      // width={"498px"}
                                    width={"100%"}
                                    height={"400px"}
                                    ImageAlt={item?.image_alt}
                                  />
                                  {/* <img src={Endpoints.ImageUrl +  item?.images} alt={item?.image_alt} height="436px"/> */}
                                </div>

                                <Link
                                  to={
                                    item?.cat_slug
                                      .replace(/\s+/g, "-")
                                      .toLowerCase() +
                                    "/" +
                                    item?.url
                                  }
                                  className={
                                    index === 0
                                      ? "category politic"
                                      : "category fashion"
                                  }
                                >
                                  Technology
                                </Link>

                                <div className="content">
                                  <h2 className="title">
                                    <Link
                                      to={
                                        item?.cat_slug
                                          .replace(/\s+/g, "-")
                                          .toLowerCase() +
                                        "/" +
                                        item?.url
                                      }
                                    >
                                       {item?.title}
                                      {/* {item?.title?.length > 30
                                        ? item?.title?.substring(0, 30) + "..."
                                        : item?.title} */}
                                    </Link>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                    <div className="order-lg-2 col-lg-4 col-12">
                      {IndustriesData.map((item, index) => {
                        if (index > 0) return null;
                        return (
                          <div
                            className="post post-overlay hero-post"
                            key={index}
                          >
                            <div className="post-wrap">
                              <Image
                                Image={Endpoints.ImageUrl + item?.images}
                                width={"100%"}
                                height={"200px"}
                                ImageAlt={item?.image_alt}
                              />
                              {/* <img src={Endpoints.ImageUrl +  item?.images} alt={item?.image_alt} style={{ minHeight: "232px", maxHeight: "232px" }} /> */}

                              <Link
                                to={
                                  item?.cat_slug
                                    .replace(/&/g, "")
                                    .replace(/\s+/g, "-")
                                    .toLowerCase() +
                                  "/" +
                                  item?.url
                                }
                                className="category sports"
                              >
                                Industry
                              </Link>
                              <div className="content">
                                <h2 className="title">
                                  <Link
                                    to={
                                      item?.cat_slug
                                        .replace(/&/g, "")
                                        .replace(/\s+/g, "-")
                                        .toLowerCase() +
                                      "/" +
                                      item?.url
                                    }
                                  >
                                    {item?.title?.length > 30
                                      ? item?.title?.substring(0, 30) + "..."
                                      : item?.title}
                                  </Link>
                                </h2>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      <div className="row row-1">
                        {BusinessNewsData.map((item, index) => {
                          if (index > 1) return null;
                          return (
                            <div className="col-md-6 col-12" key={index}>
                              <div className="post post-overlay hero-post">
                                <div className="post-wrap">
                                  <div className="image">
                                    <Image
                                      Image={Endpoints.ImageUrl + item?.images}
                                      width={"248px"}
                                      height={"198px"}
                                      ImageAlt={item?.image_alt}
                                    />
                                    {/* <img src={Endpoints.ImageUrl + item?.images} alt={item?.image_alt} /> */}
                                  </div>

                                  <Link
                                    to={"/cxo/" + item?.url}
                                    className={
                                      index === 0
                                        ? "category gadgets"
                                        : "category education"
                                    }
                                  >
                                    Business
                                  </Link>

                                  <div className="content">
                                    <h6 className="title">
                                      <Link to={"/cxo/" + item?.url}>
                                        {item?.title?.length > 20
                                          ? item?.title.substring(0, 20) + "..."
                                          : item?.title}
                                      </Link>
                                    </h6>

                                    <div className="meta fix">
                                      {/* <span className="meta-item date"><i className="fa fa-clock-o"></i>{moment(item?.created_at).format("DD MMM YYYY")}</span> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* magazines */}
          <div className="post-section section mt-50">
            <div className="container">
              {magazineData.length > 0 ? (
                <Magazine
                  {...{
                    magazineData: magazineData,
                  }}
                />
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="post-section section mt-50">
            <div className="container">
              {CoverStorydata.length > 0 ? (
                <CoverStory
                  {...{
                    data: CoverStorydata,
                  }}
                />
              ) : (
                ""
              )}

              {FeaturedLeadersdata.length > 0 ? (
                <FeaturedLeaders
                  {...{
                    data: FeaturedLeadersdata,
                  }}
                />
              ) : (
                ""
              )}

              {startupInsightData.length > 0 ? (
                <StartupInsights
                  {...{
                    startupInsightData: startupInsightData,
                  }}
                />
              ) : (
                ""
              )}
              {BannerData.length > 0 ? (
                <Banner
                  {...{
                    index: "0",
                    Data: BannerData,
                  }}
                />
              ) : (
                ""
              )}

              <div className="row">
                {techonologyData.length > 0 ? (
                  <News
                    {...{
                      pageName: "Technology News",
                      item: techonologyData,
                    }}
                  />
                ) : (
                  ""
                )}

                {BusinessNewsData.length > 0 ? (
                  <News
                    {...{
                      pageName: "Business News",
                      item: BusinessNewsData,
                    }}
                  />
                ) : (
                  ""
                )}

                {IndustriesData.length > 0 ? (
                  <News
                    {...{
                      pageName: "Industry News",
                      item: IndustriesData,
                    }}
                  />
                ) : (
                  ""
                )}
              </div>

              {VideoData.length > 0 ? (
                <Video
                  {...{
                    data: VideoData,
                  }}
                />
              ) : (
                ""
              )}

              {BannerData.length > 0 ? (
                <Banner
                  {...{
                    index: "1",
                    Data: BannerData,
                  }}
                />
              ) : (
                ""
              )}

              <div class="row">
                {SportsData.length > 0 ? (
                  <Sport
                    {...{
                      pageType: "Sports",
                      category: "sports",
                      data: SportsData,
                    }}
                  />
                ) : (
                  ""
                )}
                {LifeStyleData.length > 0 ? (
                  <Sport
                    {...{
                      pageType: "Life Style",
                      category: "lifestyle",
                      data: LifeStyleData,
                    }}
                  />
                ) : (
                  ""
                )}

                <div class="col-lg-4 col-12 mb-50">
                  <div class="row">
                    <Follow />
                    <Subscribe />
                    <Contact />
                  </div>
                </div>
              </div>

              {ClientSpeakData.length > 0 ? (
                <LeaderSpeaks
                  {...{
                    Data: ClientSpeakData,
                  }}
                />
              ) : (
                ""
              )}

              {BannerData.length > 0 ? (
                <Banner
                  {...{
                    index: "2",
                    Data: BannerData,
                  }}
                />
              ) : (
                ""
              )}

              <div class="row">
                {EntrepreneursData.length > 0 ? (
                  <NewNews
                    {...{
                      pageType: "Entrepreneurs",
                      category: "entrepreneurs",
                      data: EntrepreneursData,
                    }}
                  />
                ) : (
                  ""
                )}

                {EntertainmentMediaData.length > 0 ? (
                  <NewNews
                    {...{
                      pageType: "Entertainment & Media",
                      category: "entertainment-media",
                      data: EntertainmentMediaData,
                    }}
                  />
                ) : (
                  ""
                )}

                {AwardsEventsData.length > 0 ? (
                  <NewNews
                    {...{
                      pageType: "Awards & Events",
                      category: "awards-events",
                      data: AwardsEventsData,
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          {BannerData.length > 0 ? (
            <Banner
              {...{
                index: "3",
                Data: BannerData,
              }}
            />
          ) : (
            ""
          )}
          {FeaturedLeadersdata.length > 0 ? (
            <CompanyLogo
              {...{
                data: FeaturedLeadersdata,
              }}
            />
          ) : (
            ""
          )}
          <Footer />
        </>
      )}
    </>
  );
}
