import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FetchApi } from '../../API/FetchApi';
import { Endpoints } from '../../API/Endpoints';
import { Helmet } from "react-helmet";
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Loader from '../Loader/Index';


export default function Magazine() {
    const [magazineData, setMagazineData] = useState([]);
    const [link, setLink] = useState([]);
    const [loader, setLoader] = useState(false);
    const location = useLocation();
    const param = useParams();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [param?.slug, location.pathname]);

    useEffect(() => {
        handleGetmagazine();
    }, []);

    const handleGetmagazine = async () => {
        setLoader(true);
        try {
            let resp = await FetchApi(Endpoints.GetMagazine);
            if (resp && resp.status === true) {

                setMagazineData(resp.data?.data);
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
    const handleNextPageData = async (nextPage) => {
        setLoader(true);
        try {
            let resp = await FetchApi(nextPage);
            if (resp && resp.status === true) {

                setMagazineData(resp.data?.data);
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
                        <title>Best Online Business Magazine | Best Business Magazine</title>
                    </Helmet>

                    <div className="page-banner-section section mt-30 mb-30">
                        <div className="container">
                            <div className="row row-1">

                                <div className="col-lg-12 col-md-12  col-12">
                                    <div className="page-banner" style={{ "background-image": "url(../img/bg/page-banner-fashion.jpg)" }}>
                                        <h2>Category: <span className="category-fashion">Magazines</span></h2>
                                        <ol className="page-breadcrumb">
                                            <li><Link to="/">Home</Link></li>
                                            <li className="active">Magazines</li>
                                        </ol>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="popular-section section bg-white pt-50 pb-50">
                        <div className="container">
                            <div className="row">

                                {magazineData.map((item, index) => {
                                    return (

                                        <div className="col-md-3 mt-3" key={index}>
                                            <div className="post post-small post-list post-dark popular-post">

                                                <div className="" style={{ paddingBottom: '10px' }}>
                                                    <Link className="image w-100" to={"/magazine/" + item?.url} style={{ border: "5px solid red" }}><img src={Endpoints.ImageUrl + item?.magazine_cover_image} alt="post" className=" w-100" /></Link>

                                                </div>

                                                <div className="post-wrap magazine-title p-3 bg-primary" style={{ minHeight: "70px", maxHeight: "70px", fontWeight: 900 }}>
                                                    <Link to={"/magazine/" + item?.url} >
                                                        <h5 className="text-white" >{item?.issue_title}</h5>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                                <div className="page-pagination text-center mt-5">
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
                    <Footer />

                </>
            }
        </>

    )
}
