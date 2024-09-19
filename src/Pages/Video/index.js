// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FetchApi } from '../../API/FetchApi';
// import { Endpoints } from '../../API/Endpoints';

// import { Helmet } from "react-helmet";
// import { useLocation, useParams } from 'react-router-dom';
// import Header from '../../Layout/Header';
// import Footer from '../../Layout/Footer';
// import Loader from '../Loader/Index';
// export default function Video() {

//     const [data, setData] = useState([]);
//     const [loader, setLoader] = useState(false);
//     const param = useParams();
//     const location = useLocation();

//     useEffect(() => {
//         window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
//     }, [param?.slug, location.pathname]);
//     useEffect(() => {
//         handleGetData();
//     }, []);

//     const handleGetData = async () => {
//         setLoader(true);
//         try {
//             let resp = await FetchApi(Endpoints.GetVideo);
//             if (resp && resp.status === true) {
//                 setData(resp.data);
//                 setLoader(false);
//             }
//         }
//         catch (e) {
//             if (e && e.response && e.response.data && e.response.data.message) {
//                 console.log(e.response.data.message)
//             }
//         }
//     };


//     return (
//         <>
//             {loader ?
//                 <Loader />
//                 :
//                 <>
//                     <Header />
//                     <Helmet>
//                         <title>Videos</title>
//                     </Helmet>
//                     <div className="page-banner-section section mt-30 mb-30">
//                         <div className="container">
//                             <div className="row row-1">

//                                 <div className="col-lg-12 col-md-12  col-12">
//                                     <div className="page-banner" style={{ "background-image": "url(../img/bg/page-banner-fashion.jpg)" }}>
//                                         <h2>Category: <span className="category-fashion">Videos</span></h2>
//                                         <ol className="page-breadcrumb">
//                                             <li><Link to="/">Home</Link></li>
//                                             <li className="active">Videos</li>
//                                         </ol>

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="instagram-section section mb-30">
//                         <div class="container">
//                             <div className="row">
//                                 {data.map((item, index) => {

//                                     return (
//                                         <div className="col-md-3" key={index}>
//                                             <div className="post post-overlay gadgets-post w-100 bg-dark">
//                                                 <div className="post-wrap ">
//                                                     <a href={Endpoints.ImageUrl + item?.video} class="image video-popup" target={"_blank"} rel="noreferrer">
//                                                         <video width="270" height="250" src={Endpoints.ImageUrl + item?.video}>

//                                                         </video>
//                                                         <span class="video-btn"><i class="fa fa-play"></i></span>
//                                                     </a>
//                                                 </div>
//                                             </div>

//                                         </div>
//                                     )
//                                 })}
                              

//                                 {/* <div className="page-pagination text-center mt-5 mb-5">
//                             <ul>
//                                 {link.map((item, index) => {
//                                     return (
//                                         <li className={item?.active === true ? "active" : ""} key={index}>
//                                             {item?.url === null ?
//                                                 <Link to="#">
//                                                     {item?.label === "&laquo; Previous" ? <i className="fa fa-angle-left"></i> : item?.label === "Next &raquo;" ? <i className="fa fa-angle-right"></i> : item?.label}
//                                                 </Link>
//                                                 :
//                                                 <Link to="#" onClick={() => {
//                                                     handleNextPageData(item?.url)
//                                                 }}>
//                                                     {item?.label === "&laquo; Previous" ? <i className="fa fa-angle-left"></i> : item?.label === "Next &raquo;" ? <i className="fa fa-angle-right"></i> : item?.label}
//                                                 </Link>
//                                             }
//                                         </li>
//                                     )
//                                 })}


//                             </ul>
//                         </div> */}
//                             </div>
//                         </div>
//                     </div>
//                     <Footer />

//                 </>
//             }
//         </>
//     )
// }
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { useLocation, useParams } from 'react-router-dom';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';

export default function Video() {
    const param = useParams();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [param?.slug, location.pathname]);

    const videos = [
        "https://www.youtube.com/embed/4HYKLY7hXr4",
        "https://www.youtube.com/embed/Py4zrERAV8s",
        "https://www.youtube.com/embed/yh670QHDISw",
        "https://www.youtube.com/embed/EUEB1sx_RwM",
        "https://www.youtube.com/embed/IIW_DYprilc",
    ];

    return (
        <>
            <Helmet>
                <title>Videos - Your Site Name</title>
                <meta name="description" content="Watch the latest videos and stay updated with new content." />
            </Helmet>

            <Header />

            <div className="page-banner-section section mt-30 mb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-banner" style={{ backgroundImage: "url(../img/bg/page-banner-fashion.jpg)" }}>
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

            <div className="instagram-section section mb-30">
                <div className="container">
                    <div className="row">
                        {videos.map((videoUrl, index) => (
                            <div className="col-md-3 col-sm-6 col-12 mt-2" key={index}>
                                <div className="post post-overlay gadgets-post">
                                    <div className="post-wrap">
                                        <iframe
                                            className="w-full"
                                            height="250"
                                            src={videoUrl}
                                            frameBorder="0"
                                            allow="encrypted-media; picture-in-picture"
                                            allowFullScreen
                                            title={`YouTube video player - video ${index}`}
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
