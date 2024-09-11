import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FetchApi } from '../../API/FetchApi';
import { Endpoints } from '../../API/Endpoints';


import { Helmet } from "react-helmet";
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Loader from '../Loader/Index';
export default function Deatil() {
    const [data, setData] = useState("");
    const [MagazineData, setMagazineData] = useState("");
    const [loader, setLoader] = useState(false);
    const param = useParams();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        getData();
    }, [param?.slug, location.pathname]);

    const getData = async () => {
        setLoader(true);
        let type = "technology";
        if (location.pathname.split("/")[1] === "technology") {
            type = "technology";
        }
        if (location.pathname.split("/")[1] === "Healthcare"
            || location.pathname.split("/")[1] === "healthcare"
            || location.pathname.split("/")[1] === "Retail"
            || location.pathname.split("/")[1] === "retail"
            || location.pathname.split("/")[1] === "Telecom"
            || location.pathname.split("/")[1] === "telecom"
            || location.pathname.split("/")[1] === "banking-finance"
            || location.pathname.split("/")[1] === "education"
            || location.pathname.split("/")[1] === "legal"
            || location.pathname.split("/")[1] === "media-entertainment"
            || location.pathname.split("/")[1] === "ERP"
            || location.pathname.split("/")[1] === "erp"
            || location.pathname.split("/")[1] === "digital-marketing"
            || location.pathname.split("/")[1] === "Business"
            || location.pathname.split("/")[1] === "business"
            || location.pathname.split("/")[1] === "food-beverage"
        ) {
            type = "industry";
        }
        // if (location.pathname.split("/")[1] === "business-news-detail") {
        //     type = "bussiness-news";
        // }
        if (location.pathname.split("/")[1] === "cxo") {
            type = "cxo";
        }
        if (location.pathname.split("/")[1] === "startup-insights") {
            type = "startup-insight";
        }
        if (location.pathname.split("/")[1] === "feature") {
            type = "featured-people";
        }
        if (location.pathname.split("/")[1] === "cover-story") {
            type = "cover-story";
        }
        if (location.pathname.split("/")[1] === "news-detail"
            || location.pathname.split("/")[1] === "sports"
            || location.pathname.split("/")[1] === "lifestyle"
            || location.pathname.split("/")[1] === "entrepreneurs"
            || location.pathname.split("/")[1] === "entertainment-media"
            || location.pathname.split("/")[1] === "awards-events"
        ) {
            type = "new-category";
        }
        // if (location.pathname.split("/")[1] === "popular-news-detail") {
        //     type = "top-category";
        // }
        try {
            let resp = await FetchApi(Endpoints.GetNewsDetail + "/" + type + "/" + param?.slug);
            if (resp && resp.status === true) {
                if (location.pathname.split("/")[1] === "feature") {
                    setData(resp.data?.people);
                    setMagazineData(resp.data?.magazine);
                } else if (location.pathname.split("/")[1] === "cover-story") {
                    setData(resp.data?.CoverStory);
                    setMagazineData(resp.data?.magazine);
                } else {
                    setData(resp.data);
                }
                setLoader(false);

            }
        }
        catch (e) {
            if (e && e.response && e.response.data && e.response.data.message) {
                console.log(e.response.data.message)
            }
        }
    }
    return (
        <>
            {loader ?
                <Loader />
                :
                <>
                    <Header />
                    <Helmet>
                        <title>{data?.meta_title}</title>
                    </Helmet>
                    <div className="post-header-section section mt-30 mb-30">
                        <div className="container">
                            <div className="row row-1">
                                <div className="col-12">
                                    <div className="post-header" style={{ "background-image": "url(../img/bg/page-banner-fashion.jpg)" }}>
                                        <h3 className="title">{data?.title}</h3>
                                        <div className="meta fix">
                                            <a href="#" className="meta-item category fashion">{data?.cat_slug}</a>
                                            {/* <a href="#" className="meta-item author"><img src="../img/post/post-author-1.jpg" alt="post author" />Sathi Bhuiyan</a> */}
                                            {/* <span className="meta-item date"><i className="fa fa-clock-o"></i>{moment(data?.created_at).format("DD MMM YYYY")}</span> */}

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="post-section section">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-12 col-12 mb-50">
                                    {location.pathname.split("/")[1] === "feature" ?
                                        <div className="mb-20 text-center w-100 ">
                                            <Link to={"/magazine/" + MagazineData?.url}>
                                                <img src={Endpoints.ImageUrl + MagazineData?.issue_logo} alt="" className="w-50 border p-2" />
                                            </Link>

                                        </div>
                                        : ""}

                                    {location.pathname.split("/")[1] === "cover-story" ?
                                        <div className="mb-20 text-center w-100 ">
                                            <Link to={"/magazine/" + data?.pre_link}>
                                                <img src={Endpoints.ImageUrl + MagazineData?.issue_logo} alt="" className="w-50 border p-2" />
                                            </Link>

                                        </div>
                                        : ""}

                                    <div className="text-center w-100 mb-20">
                                        <img src={Endpoints.ImageUrl + data?.images} alt="" className="w-50" />
                                    </div>


                                    <div className="post-block-wrapper mb-50 mt-0">
                                        <div className="body">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="single-post">
                                                        <div className="post-wrap">
                                                            <div className="">
                                                                <p className="" dangerouslySetInnerHTML={{ __html: data?.content_details }}></p>

                                                            </div>



                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

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

