import React, { useEffect, useState, useCallback } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FetchApi } from '../../API/FetchApi';
import { Endpoints } from '../../API/Endpoints';
import { Helmet } from 'react-helmet';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Loader from '../Loader/Index';

const Deatil = () => {
    const [data, setData] = useState(null);
    const [magazineData, setMagazineData] = useState(null);
    const [loader, setLoader] = useState(true);
    const { slug } = useParams();
    const location = useLocation();

    const getData = useCallback(async () => {
        setLoader(true);
        let type = "technology";

        const path = location.pathname.split("/")[1].toLowerCase();
        switch (path) {
            case "technology":
                type = "technology";
                break;
            case "healthcare":
            case "retail":
            case "telecom":
            case "banking-finance":
            case "education":
            case "legal":
            case "media-entertainment":
            case "erp":
            case "digital-marketing":
            case "business":
            case "food-beverage":
                type = "industry";
                break;
            case "cxo":
                type = "cxo";
                break;
            case "startup-insights":
                type = "startup-insight";
                break;
            case "feature":
                type = "featured-people";
                break;
            case "cover-story":
                type = "cover-story";
                break;
            case "news-detail":
            case "sports":
            case "lifestyle":
            case "entrepreneurs":
            case "entertainment-media":
            case "awards-events":
                type = "new-category";
                break;
            default:
                type = "technology";
        }

        try {
            const resp = await FetchApi(`${Endpoints.GetNewsDetail}/${type}/${slug}`);
            if (resp && resp.status) {
                if (path === "feature") {
                    setData(resp.data?.people);
                    setMagazineData(resp.data?.magazine);
                } else if (path === "cover-story") {
                    setData(resp.data?.CoverStory);
                    setMagazineData(resp.data?.magazine);
                } else {
                    setData(resp.data);
                }
                setLoader(false);
            }
        } catch (e) {
            console.error('Error fetching data:', e.response?.data?.message || e.message);
        }
    }, [location.pathname, slug]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        getData();
    }, [getData]);

    if (loader) {
        return <Loader />;
    }

    const path = location.pathname.split("/")[1];

    return (
        <>
            <Header />
            <Helmet>
                <title>{data?.meta_title || 'Detail Page'}</title>
            </Helmet>
            <div className="post-header-section section mt-30 mb-30">
                <div className="container">
                    <div className="row row-1">
                        <div className="col-12">
                            <div className="post-header" style={{ backgroundImage: 'url(../img/bg/page-banner-fashion.jpg)' }}>
                                <h3 className="title">{data?.title}</h3>
                                <div className="meta fix">
                                    <span className="meta-item category fashion">{data?.cat_slug}</span>
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
                            {path === "feature" && magazineData && (
                                <div className="mb-20 text-center w-100">
                                    <Link to={`/magazine/${magazineData?.url}`}>
                                        <img src={`${Endpoints.ImageUrl}${magazineData?.issue_logo}`} alt={magazineData?.url} className="w-50 border p-2" />
                                    </Link>
                                </div>
                            )}
                            {path === "cover-story" && magazineData && (
                                <div className="mb-20 text-center w-100">
                                    <Link to={`/magazine/${data?.pre_link}`}>
                                        <img src={`${Endpoints.ImageUrl}${magazineData?.issue_logo}`} alt={data?.pre_link} className="w-50 border p-2" />
                                    </Link>
                                </div>
                            )}
                            <div className="text-center w-100 mb-20">
                                <img src={`${Endpoints.ImageUrl}${data?.images}`} alt={data?.title} className="w-50" />
                            </div>
                            <div className="post-block-wrapper mb-50 mt-0">
                                <div className="body">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="single-post">
                                                <div className="post-wrap">
                                                    <div className="">
                                                        <p className="" dangerouslySetInnerHTML={{ __html: data?.content_details || '' }}></p>
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
    );
};

export default Deatil;
