import React from 'react';
import { Link } from 'react-router-dom';
import { Endpoints } from '../../API/Endpoints';

export default function StartupInsights({ startupInsightData }) {

    return (
        <div className="row ">

            <div className="col-lg-8 col-12 mb-50 d-flex">


                <div className="post-block-wrapper">


                    <div className="head life-style-head">


                        <h4 className="title">Startup Insights</h4>


                        <ul className="post-block-tab-list life-style-post-tab-list nav d-none d-md-block">
                            <li><Link className="" to="/startup-insights"> 
                            <h4 className="title">
                                View More
                            </h4></Link></li>

                        </ul>


                        <ul className="post-block-tab-list life-style-post-tab-list nav d-sm-block d-md-none">
                            <li><Link className="dropdown-toggle" data-bs-toggle="dropdown" to="#">Startup Insights</Link>


                                <ul className="dropdown-menu">
                                    <li><Link className="active" to="/startup-insights">View More</Link></li>

                                </ul>

                            </li>
                        </ul>

                    </div>


                    <div className="body">


                        <div className="tab-content">


                            <div className="tab-pane fade show active" id="life-style-cat-1">

                                <div className="row">

                                    {startupInsightData.map((item, index) => {
                                        if (index > 7) return null;
                                        return (
                                            <div className="post post-small post-list life-style-post  post-separator-border   post-separator col-md-6 col-12">
                                                <div className="post-wrap">


                                                    <Link className="image" to={"/startup-insights/" + item?.url}><img src={Endpoints.ImageUrl + item.images} alt={item.image_alt} className="news_image" /></Link>


                                                    <div className="content">


                                                        <h5 className="title"><Link to={"/startup-insights/" + item?.url}>{item.title.length > 30 ? item.title.substring(0, 30) + "..." : item.title}</Link></h5>



                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    })}


                                </div>

                            </div>




                        </div>

                    </div>

                </div>

            </div>


            <div className="col-lg-4 col-12 mb-50 d-flex">
                <div className="row">


                    <div className="single-sidebar col-12">


                        <div className="sidebar-block-wrapper">


                            <div className="head life-style-head">


                                <h4 className="title my-1">Startup Insights</h4>

                            </div>


                            <div className="body">


                                <div className="row">

                                    {startupInsightData.map((item, index) => {
                                        if (index < 7 || index > 10) return null;
                                        return (
                                            <div className="post post-small post-list life-style-post post-separator-border col-lg-12 col-md-6 col-12" key={index}>
                                                <div className="post-wrap">


                                                    <Link className="image" to={"/startup-insights/" + item?.url}><img src={Endpoints.ImageUrl + item.images} alt={item.image_alt} className="news_image" /></Link>


                                                    <div className="content">


                                                        <h5 className="title"><Link to={"/startup-insights/" + item?.url}>{item.title.length > 30 ? item.title.substring(0, 30) + "..." : item.title}</Link></h5>



                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    })}







                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
