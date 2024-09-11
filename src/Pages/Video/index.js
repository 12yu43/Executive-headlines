import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchApi } from '../../API/FetchApi';
import { Endpoints } from '../../API/Endpoints';

import { Helmet } from "react-helmet";
import { useLocation, useParams } from 'react-router-dom';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Loader from '../Loader/Index';
export default function Video() {

    const [data, setData] = useState([]);
    const [link, setLink] = useState([]);
    const [loader, setLoader] = useState(false);
    const param = useParams();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [param?.slug, location.pathname]);
    useEffect(() => {
        handleGetData();
    }, []);

    const handleGetData = async () => {
        setLoader(true);
        try {
            let resp = await FetchApi(Endpoints.GetVideo);
            if (resp && resp.status === true) {
                setData(resp.data);
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
                        <title>Videos</title>
                    </Helmet>
                    <div className="page-banner-section section mt-30 mb-30">
                        <div className="container">
                            <div className="row row-1">

                                <div className="col-lg-12 col-md-12  col-12">
                                    <div className="page-banner" style={{ "background-image": "url(../img/bg/page-banner-fashion.jpg)" }}>
                                        <h2>Category: <span className="category-fashion">Videos</span></h2>
                                        <ol className="page-breadcrumb">
                                            <li><Link to="/">Home</Link></li>
                                            <li className="active">Videos</li>
                                        </ol>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="instagram-section section mb-30">
                        <div class="container">
                            <div className="row">
                                {data.map((item, index) => {

                                    return (
                                        <div className="col-md-3" key={index}>
                                            <div className="post post-overlay gadgets-post w-100 bg-dark">
                                                <div className="post-wrap ">
                                                    <a href={Endpoints.ImageUrl + item?.video} class="image video-popup" target={"_blank"}>
                                                        <video width="270" height="250" src={Endpoints.ImageUrl + item?.video}>

                                                        </video>
                                                        <span class="video-btn"><i class="fa fa-play"></i></span>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })}

                                {/* <div className="page-pagination text-center mt-5 mb-5">
                            <ul>
                                {link.map((item, index) => {
                                    return (
                                        <li className={item?.active === true ? "active" : ""} key={index}>
                                            {item?.url === null ?
                                                <Link to="#">
                                                    {item?.label === "&laquo; Previous" ? <i className="fa fa-angle-left"></i> : item?.label === "Next &raquo;" ? <i className="fa fa-angle-right"></i> : item?.label}
                                                </Link>
                                                :
                                                <Link to="#" onClick={() => {
                                                    handleNextPageData(item?.url)
                                                }}>
                                                    {item?.label === "&laquo; Previous" ? <i className="fa fa-angle-left"></i> : item?.label === "Next &raquo;" ? <i className="fa fa-angle-right"></i> : item?.label}
                                                </Link>
                                            }
                                        </li>
                                    )
                                })}


                            </ul>
                        </div> */}
                            </div>
                        </div>
                    </div>
                    <Footer />

                </>
            }
        </>
    )
}
