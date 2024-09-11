import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FetchApi } from '../../API/FetchApi';
import { Endpoints } from '../../API/Endpoints';


import { Helmet } from "react-helmet";
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Loader from '../Loader/Index';
export default function MagazineDeatil() {
    const [data, setData] = useState("");
    const [CoverData, setCoverData] = useState("");
    const [featuredpeopleData, setFeaturedpeopleData] = useState([]);
    const [loader, setLoader] = useState(false);
    const param = useParams();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        getData();
    }, [param]);

    const getData = async () => {
        setLoader(true);
        try {
            let resp = await FetchApi(Endpoints.GetNewsDetail + "/magazine" + "/" + param?.slug);
            if (resp && resp.status === true) {
                setData(resp.data?.magazine);
                setFeaturedpeopleData(resp.data?.featuredpeople);
                setCoverData(resp.data?.coverstory);
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
                                        <h3 className="title">{CoverData?.title}</h3>
                                        <div className="meta fix">
                                            <a href="#" className="meta-item category fashion">Cover Story</a>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="container mb-50">
                        <div className="card">
                            <div className="card-header text-center">
                                <h2>On the Cover</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4" >
                                        <Link to={"/cover-story/" + CoverData?.url}>
                                            <img src={Endpoints.ImageUrl + data?.magazine_cover_image} alt="" className="w-100" style={{ border: "5px solid red" }} />
                                        </Link>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="p-2"
                                            dangerouslySetInnerHTML={{ __html: CoverData?.content_details?.substring(0, 1300) + "..." }}
                                        >

                                        </div>
                                        <div className="text-center">
                                            <Link to={"/cover-story/" + CoverData?.url} className="btn btn-danger text-white">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <Link to={"/listing/" + data?.url}>
                                <img src={Endpoints.ImageUrl + data?.issue_logo} alt="" className="w-50 border p-3" />
                            </Link>
                        </div>
                        <div className="row mt-5">
                            {featuredpeopleData.map((item, index) => {
                                return (
                                    <div className="col-md-4 mt-4" key={index}>
                                        <div className="card">
                                            <div className="card-body">
                                                <Link to={"/feature/" + item?.url}>
                                                    <img src={Endpoints.ImageUrl + item?.images} alt="" className="w-100" />
                                                </Link>
                                                <h5 class="title mt-3">
                                                    <Link to={"/feature/" + item?.url}>
                                                        {item?.title?.substring(0, 70) + "..."}
                                                    </Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}




                        </div>
                    </div>
                    <Footer />
                </>
            }
        </>
    )
}
