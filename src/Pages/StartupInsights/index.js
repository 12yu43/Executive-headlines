import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchApi } from '../../API/FetchApi';
import { Endpoints } from '../../API/Endpoints';


import Subscribe from '../Home/Subscribe';
import Follow from '../Home/Follow';
import { Helmet } from "react-helmet";
import { useLocation, useParams } from 'react-router-dom';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Loader from '../Loader/Index';

export default function StartupInsights() {
    const [startupInsightData, setStartupInsightData] = useState([]);
    const [link, setLink] = useState([]);
    const [loader, setLoader] = useState(false);
    const param = useParams();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [param?.slug, location.pathname]);
    useEffect(() => {
        handleGetStartupInsight();
    }, []);

    const handleGetStartupInsight = async () => {
        setLoader(true);
        try {
            let resp = await FetchApi(Endpoints.GetStartupInsight);
            if (resp && resp.status === true) {
                setStartupInsightData(resp.data?.data);
                setLink(resp.data?.links);
                setLoader(false);
            }
        }
        catch (e) {
            if (e && e.response && e.response.data && e.response.data.message) {
                console.log(e.response.data.message)
            }
        }
    };
    const handleNextPageData = async (pageUrl) => {
        setLoader(true);
        try {
            let resp = await FetchApi(pageUrl);
            if (resp && resp.status === true) {
                setStartupInsightData(resp.data?.data);
                setLink(resp.data?.links);
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
                        <title>Startup News Archives</title>
                    </Helmet>
                    <div class="page-banner-section section mt-30 mb-30">
                        <div class="container">
                            <div class="row row-1">

                                <div class="col-lg-12 col-12">
                                    <div class="page-banner" style={{ "background-image": "url(../img/bg/page-banner-fashion.jpg)" }}>
                                        <h2>Category: <span class="category-fashion">Startup Insights</span></h2>
                                        <ol class="page-breadcrumb">
                                            <li><a href="/">Home</a></li>
                                            <li class="active">Startup Insights</li>
                                        </ol>
                                        {/* <p>Vestibulum vulputate sit amet orci sed egestas. Integer lobortis metus in cursus moll condimentum arcu in diam pharetra, nec vehicula urna vehicula. Nullam iaculis odio orci, ut tristique nibh ultrices vitae. Praesent sit amet mauris iaculis, </p> */}
                                    </div>
                                </div>

                                {/* <div class="page-banner-image col-lg-4 col-12 d-none d-lg-block"><img src="../img/banner/page-banner-fashion.jpg" alt="Page Banner Image" /></div> */}

                            </div>
                        </div>
                    </div>

                    <div class="post-section section mt-50">
                        <div class="container">


                            <div class="row">

                                <div class="col-lg-8 col-12 mb-50">


                                    <div class="post-block-wrapper">


                                        <div class="body">
                                            {startupInsightData.map((item, index) => {
                                                return (
                                                    <div class="post fashion-post post-default-list post-separator-border" key={index}>
                                                        <div class="post-wrap">
                                                            <Link class="image" to={"/startup-insights/" + item?.url}><img src={Endpoints.ImageUrl + item?.images} alt={item?.image_alt} /></Link>
                                                            <div class="content">
                                                                <h4 class="title"><Link to={"/startup-insights/" + item?.url}>{item?.title}</Link></h4>
                                                                <p>{item?.meta_description?.length > 200 ? item?.meta_description.substring(0, 200) + "..." : item.meta_description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}





                                            <div class="page-pagination text-center">
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
                                            </div>

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
