import React, { useEffect, useState } from 'react';
import { FetchApi } from '../../API/FetchApi';
import { Endpoints } from '../../API/Endpoints';

import { Link, useLocation, useParams } from 'react-router-dom'

import Subscribe from '../Home/Subscribe';
import Follow from '../Home/Follow';
import { Helmet } from "react-helmet";
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Loader from '../Loader/Index';

export default function News() {
    const param = useParams();
    const location = useLocation();
    const [data, setData] = useState([]);
    const [link, setLink] = useState([]);
    const [pageTitle, setPageTitle] = useState('');
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [param?.slug, location.pathname]);

    useEffect(() => {
        handleGetData();
    }, [location.pathname]);

    const handleGetData = async () => {
        setLoader(true);
        let slug = 'Sports';
        if (location.pathname === "/sports") {
            slug = "Sports";
        } else if (location.pathname === "/lifestyle") {
            slug = "Lifestyle";
        } else if (location.pathname === "/entrepreneurs") {
            slug = "Entrepreneurs";
        } else if (location.pathname === "/entertainment-media") {
            slug = "Entertainment & Media";
        } else if (location.pathname === "/awards-events") {
            slug = "Awards & Events";
        }
        setPageTitle(slug);

        try {
            let resp = await FetchApi(Endpoints.GetNewNews + "/" + slug);
            if (resp && resp.status === true) {
                setData(resp.data?.data);
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
        let slug = 'Sports';
        if (location.pathname === "/sports") {
            slug = "Sports";
        } else if (location.pathname === "/lifestyle") {
            slug = "Lifestyle";
        } else if (location.pathname === "/entrepreneurs") {
            slug = "Entrepreneurs";
        } else if (location.pathname === "/entertainment-media") {
            slug = "Entertainment & Media";
        } else if (location.pathname === "/awards-events") {
            slug = "Awards & Events";
        }
        try {
            let resp = await FetchApi(pageUrl);
            if (resp && resp.status === true) {
                setData(resp.data?.data);
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
                        <title>Top {pageTitle} News</title>
                    </Helmet>
                    <div className="page-banner-section section mt-30 mb-30">
                        <div className="container">
                            <div className="row row-1">

                                <div className="col-lg-12 col-md-12  col-12">
                                    <div className="page-banner" style={{ "background-image": "url(../img/bg/page-banner-fashion.jpg)" }}>
                                        <h2>Category: <span className="category-fashion">{pageTitle}</span></h2>
                                        <ol className="page-breadcrumb">
                                            <li><Link to="/">Home</Link></li>
                                            <li className="active">{pageTitle}</li>
                                        </ol>
                                        {/* <p>Vestibulum vulputate sit amet orci sed egestas. Integer lobortis metus in cursus moll condimentum arcu in diam pharetra, nec vehicula urna vehicula. Nullam iaculis odio orci, ut tristique nibh ultrices vitae. Praesent sit amet mauris iaculis, </p> */}
                                    </div>
                                </div>

                                {/* <div className="page-banner-image col-lg-4 col-12 d-none d-lg-block"><img src="../img/banner/page-banner-fashion.jpg" alt="Page Banner Image" /></div> */}

                            </div>
                        </div>
                    </div>

                    <div className="post-section section mt-50">
                        <div className="container">


                            <div className="row">

                                <div className="col-lg-8 col-12 mb-50">


                                    <div className="post-block-wrapper">


                                        <div className="body">

                                            {data?.map((item, index) => {
                                                return (
                                                    <div className="post fashion-post post-default-list post-separator-border" key={index}>
                                                        <div className="post-wrap">


                                                            <Link className="image" to={location.pathname + "/" + item?.url}><img src={Endpoints.ImageUrl + item.images} alt={item.image_alt} /></Link>


                                                            <div className="content">


                                                                <h4 className="title"><Link to={location.pathname + "/" + item?.url}>{item?.title?.length > 30 ? item?.title?.substring(0, 30) + "..." : item.title}</Link></h4>


                                                                <div className="meta fix">
                                                                    {/* <span className="meta-item date"><i className="fa fa-clock-o"></i>{moment(item?.created_at).format("DD MMM YYYY")}</span> */}
                                                                </div>


                                                                <p>  {item?.meta_description?.length > 250 ? item?.meta_description?.substring(0, 250) + "..." : item.meta_description}</p>

                                                            </div>

                                                        </div>
                                                    </div>
                                                )
                                            })}







                                            <div className="page-pagination text-center">
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

                                                    {/* <li className="active"><Link to="#">1</Link></li>
                                    <li><Link to="#">2</Link></li>
                                    <li><Link to="#">3</Link></li>
                                    <li><Link to="#"><i className="fa fa-angle-right"></i></Link></li> */}
                                                </ul>
                                            </div>

                                        </div>

                                    </div>

                                </div>


                                <div className="col-lg-4 col-12 mb-50">
                                    <div className="row">
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
