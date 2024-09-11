import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import { FetchApi } from '../../API/FetchApi';
import { Endpoints } from '../../API/Endpoints';
import Subscribe from '../Home/Subscribe';
import Follow from '../Home/Follow';
import { Helmet } from "react-helmet";
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Loader from '../Loader/Index';

export default function Search() {
  const [TechnologyData, setTechnologyData] = useState([]);
  const [IndustryData, setIndustryData] = useState([]);
  const [MagazineData, setMagazineData] = useState([]);
  const [CxoData, setCxoData] = useState([]);
  const [StartupData, setStartupData] = useState([]);
  const [loader, setLoader] = useState(false);
  const param = useParams();
  useEffect(() => {
    handleGetData();
  }, [param?.search]);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [param?.slug, location.pathname]);

  const handleGetData = async () => {
    setLoader(true);
    try {
      let resp = await FetchApi(Endpoints.GetSearch + "/" + param?.search);
      if (resp && resp.status === true) {
        setTechnologyData(resp.data?.technology);
        setIndustryData(resp.data?.industry);
        setMagazineData(resp.data?.magazine);
        setCxoData(resp.data?.cxo);
        setStartupData(resp.data?.startup);
        setLoader(false);
      }
    }
    catch (e) {
      if (e && e.response && e.response.data && e.response.data.message) {
        console.log(e.response.data.message)
      }
    }
  };

  return (
    <>
      {loader ?
        <Loader />
        :
        <>
          <Header />
          <Helmet>
            <title>The Executive Headlines - Top business magazine & news headlines sources</title>
          </Helmet>
          <div class="page-banner-section section mt-30 mb-30">
            <div class="container">
              <div class="row row-1">

                <div class="col-lg-12 col-12">
                  <div class="page-banner" style={{ "background-image": "url(../img/bg/page-banner-fashion.jpg)" }}>
                    <h2><span class="category-fashion">Search</span></h2>
                    <ol class="page-breadcrumb">
                      <li><a href="/">Home</a></li>
                      <li class="active">Search</li>
                    </ol>

                  </div>
                </div>


              </div>
            </div>
          </div>

          <div class="post-section section mt-50">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-12 mb-50">
                  <div class="post-block-wrapper">
                    <div class="body">
                      {TechnologyData?.map((item, index) => {
                        return (
                          <div class="post fashion-post post-default-list post-separator-border" key={index}>
                            <div class="post-wrap">


                              <Link class="image" to={item?.cat_slug + "/" + item?.url}><img src={Endpoints.ImageUrl + item?.images} alt={item?.image_alt} className="client-image" /></Link>

                              <div class="content">


                                <h4 class="title"><Link to={item?.cat_slug + "/" + item?.url}>{item?.title?.length > 50 ? item?.title?.substring(0, 50) + "..." : item?.title}</Link></h4>

                                <div class="meta fix">

                                  {/* <span class="meta-item date"><i class="fa fa-clock-o"></i>{moment(item?.created_at).format("DD MMM YYYY")}</span> */}
                                </div>


                                <p>{item?.meta_description?.length > 100 ? item?.meta_description?.substring(0, 100) + "..." : item?.meta_description}</p>


                                {/* <Link to="/post-detail" class="read-more">continue reading</Link> */}

                              </div>

                            </div>
                          </div>
                        )
                      })}

                      {IndustryData?.map((item, index) => {
                        return (
                          <div class="post fashion-post post-default-list post-separator-border" key={index}>
                            <div class="post-wrap">


                              <Link class="image" to={item?.cat_slug + "/" + item?.url}><img src={Endpoints.ImageUrl + item?.images} alt={item?.image_alt} className="client-image" /></Link>

                              <div class="content">


                                <h4 class="title"><Link to={item?.cat_slug + "/" + item?.url}>{item?.title?.length > 50 ? item?.title?.substring(0, 50) + "..." : item?.title}</Link></h4>

                                <div class="meta fix">

                                  {/* <span class="meta-item date"><i class="fa fa-clock-o"></i>{moment(item?.created_at).format("DD MMM YYYY")}</span> */}
                                </div>


                                <p>{item?.meta_description?.length > 100 ? item.meta_description.substring(0, 100) + "..." : item.meta_description}</p>


                                {/* <Link to="/post-detail" class="read-more">continue reading</Link> */}

                              </div>

                            </div>
                          </div>
                        )
                      })}


                      {MagazineData?.map((item, index) => {
                        return (
                          <div class="post fashion-post post-default-list post-separator-border" key={index}>
                            <div class="post-wrap">


                              <Link class="image" to={"/magazine/" + item?.url}><img src={Endpoints.ImageUrl + item?.issue_logo} alt={item?.image_alt} className="client-image" /></Link>

                              <div class="content">


                                <h4 class="title"><Link to={"/magazine/" + item?.url}>{item?.issue_title?.length > 50 ? item?.issue_title?.substring(0, 50) + "..." : item?.issue_title}</Link></h4>

                                <div class="meta fix">

                                  {/* <span class="meta-item date"><i class="fa fa-clock-o"></i>{moment(item?.created_at).format("DD MMM YYYY")}</span> */}
                                </div>


                                <p>{item.meta_description.length > 100 ? item.meta_description.substring(0, 100) + "..." : item.meta_description}</p>


                                {/* <Link to="/post-detail" class="read-more">continue reading</Link> */}

                              </div>

                            </div>
                          </div>
                        )
                      })}


                      {CxoData?.map((item, index) => {
                        return (
                          <div class="post fashion-post post-default-list post-separator-border" key={index}>
                            <div class="post-wrap">


                              <Link class="image" to={"/cxo/" + item?.url}><img src={Endpoints.ImageUrl + item?.images} alt={item?.image_alt} className="client-image" /></Link>

                              <div class="content">


                                <h4 class="title"><Link to={"/cxo/" + item?.url}>{item?.title?.length > 50 ? item?.title?.substring(0, 50) + "..." : item?.title}</Link></h4>

                                <div class="meta fix">

                                  {/* <span class="meta-item date"><i class="fa fa-clock-o"></i>{moment(item?.created_at).format("DD MMM YYYY")}</span> */}
                                </div>


                                <p>{item?.meta_description?.length > 100 ? item?.meta_description?.substring(0, 100) + "..." : item?.meta_description}</p>


                                {/* <Link to="/post-detail" class="read-more">continue reading</Link> */}

                              </div>

                            </div>
                          </div>
                        )
                      })}

                      {StartupData?.map((item, index) => {
                        return (
                          <div class="post fashion-post post-default-list post-separator-border" key={index}>
                            <div class="post-wrap">


                              <Link class="image" to={"/startup-insights/" + item?.url}><img src={Endpoints.ImageUrl + item?.images} alt={item?.image_alt} className="client-image" /></Link>

                              <div class="content">


                                <h4 class="title"><Link to={"/startup-insights/" + item?.url}>{item?.title?.length > 50 ? item?.title?.substring(0, 50) + "..." : item?.title}</Link></h4>

                                <div class="meta fix">

                                  {/* <span class="meta-item date"><i class="fa fa-clock-o"></i>{moment(item?.created_at).format("DD MMM YYYY")}</span> */}
                                </div>


                                <p>{item?.meta_description?.length > 100 ? item?.meta_description?.substring(0, 100) + "..." : item?.meta_description}</p>


                                {/* <Link to="/post-detail" class="read-more">continue reading</Link> */}

                              </div>

                            </div>
                          </div>
                        )
                      })}







                    </div>
                  </div>

                </div>


                <div class="col-lg-4 col-12 mb-50">
                  <div class="row">
                    <Follow />



                    <Subscribe />

                  </div>
                </div>

              </div>

            </div>
          </div>
          <Footer />
        </>
      }
    </>
  )
}
