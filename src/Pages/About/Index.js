import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FetchApi } from '../../API/FetchApi';
import { Endpoints } from '../../API/Endpoints';


import { Helmet } from "react-helmet";
import Loader from '../Loader/Index';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';

export default function About() {
    const [data, setData] = useState("");
    const [pageTitle, setPageTitle] = useState("");
    const location = useLocation();
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        const getData = async () => {
            setLoader(true);
            let type = "About Us";
            if (location.pathname === "/about") {
                type = "About Us";
            } else if (location.pathname === "/reprint-permission") {
                type = "Reprints and Permissions";
            } else if (location.pathname === "/disclaimer") {
                type = "Disclaimer";
            } else if (location.pathname === "/contact-us") {
                type = "Contact Us";
            } else if (location.pathname === "/advertise") {
                type = "Advertise";
            } else if (location.pathname === "/privacy-policy") {
                type = "Privacy Policy";
            }

            setPageTitle(type);
            try {
                let resp = await FetchApi(Endpoints.GetAbout + "/" + type);
                if (resp && resp.status === true) {
                    setData(resp.data);
                }
            } catch (e) {
                if (e && e.response && e.response.data && e.response.data.message) {
                    console.log(e.response.data.message);
                }
            } finally {
                setLoader(false);
            }
        };

        getData();
    }, [location.pathname]);

    return (
        <>
            {loader ?
                <Loader />
                :
                <>
                    <Header />
                    <Helmet>
                        <title>The Executive Headlines | {pageTitle}</title>
                    </Helmet>
                    <div className="post-header-section section mt-30 mb-30">
                        <div className="container">
                            <div className="row row-1">
                                <div className="col-12">
                                    <div className="post-header" style={{ "background-image": "url(../img/bg/page-banner-fashion.jpg)" }}>
                                        <h3 className="title">{data?.title}</h3>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="post-section section">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-12 col-12 mb-50">
                                    <div className="post-block-wrapper mb-50">
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
