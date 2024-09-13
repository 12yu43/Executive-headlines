import React from 'react';
import { Link } from 'react-router-dom';
import { Endpoints } from '../../API/Endpoints';

export default function FeaturedLeaders({ data }) {

    return (
        <div className="row ">

            <div className="col-lg-8 col-12 mb-50 d-flex">


                <div className="post-block-wrapper">


                    <div className="head education-head">


                        <h4 className="title">Leadership Profiles</h4>


                        <ul className="post-block-tab-list education-post-tab-list nav d-none d-md-block">
                            <li><Link className="" to="/featured-vendors"> 
                            <h4 className="title">
                                View More
                            </h4></Link></li>

                        </ul>



                    </div>


                    <div className="body pb-0">


                        <div className="tab-content">


                            <div className="tab-pane fade show active" id="world-cat-1">

                                <div className="row g-5 ">

                                    {data.map((item, index) => {
                                        if (index > 3) return null;
                                        return (
                                            <div className="post education-post col-md-6 col-12 mb-20" key={index}>
                                                <div className="post-wrap">


                                                    <Link to={"/feature/" + item?.url} className="image"><img src={Endpoints.ImageUrl + item?.images} alt={item?.image_alt} /></Link>


                                                    <div className="content">


                                                        <h4 className="title"><Link to={"/feature/" + item?.url}>{item?.title}</Link></h4>


                                                        {/* <Link to="/post-detail" className="read-more">continue reading</Link> */}

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


            <div className="col-lg-4 col-12 mb-50">
                <div className="row">


                    <div className="single-sidebar col-12 d-flex">


                        <div className="sidebar-block-wrapper">


                            <div className="head education-head">


                                <h4 className="title my-1">Leadership Profiles</h4>

                            </div>


                            <div className="body ">


                                <div className="row">
                                    {data.map((item, index) => {
                                        if (index < 4 || index > 9) return null;
                                        return (
                                            <div className="post post-small post-list life-style-post post-separator-border col-lg-12 col-md-6 col-12 " key={index}>
                                                <div className="post-wrap">


                                                    <Link className="image" to={"/feature/" + item?.url}><img src={Endpoints.ImageUrl + item?.images} alt={item?.image_alt} /></Link>


                                                    <div className="content">


                                                        <h5 className="title"><Link to={"/feature/" + item?.url}> {item.title.length > 50 ? item.title.substring(0, 50) + "..." : item.title}</Link></h5>



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
