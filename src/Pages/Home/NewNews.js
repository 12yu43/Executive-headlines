import React from 'react';
import { Link } from 'react-router-dom';
import { Endpoints } from '../../API/Endpoints';

export default function NewNews({ pageType, data, category }) {

    return (
        <div className="col-lg-4 col-md-6 col-12  d-flex">


            <div className="post-block-wrapper">


                <div className="head video-head">


                    <h4 className="title">{pageType}</h4>

                </div>


                <div className="body">

                    {data.map((item, index) => {
                        if (index > 1) return null;
                        return (
                            <>
                                {index === 0 ?
                                    <div className="post video-post post-separator-border">
                                        <div className="post-wrap">


                                            <Link className="image" to={category+ "/" + item?.url}><img src={Endpoints.ImageUrl + item?.images} alt={item?.image_alt} /></Link>


                                            <div className="content">


                                                <h4 className="title"><Link to={category+ "/" + item?.url}>{item.title.length > 50 ? item.title.substring(0, 50) + "..." : item.title}</Link></h4>


                                                <div className="meta fix">

                                                    {/* <span className="meta-item date"><i className="fa fa-clock-o"></i>{moment(item?.created_at).format("DD MMM YYYY")}</span> */}
                                                </div>
                                                <p>{item.meta_description.length > 150 ? item.meta_description.substring(0, 150) + "..." : item.meta_description}</p>
                                            </div>

                                        </div>
                                    </div>
                                    :
                                    <div className="post video-post post-separator-border">
                                        <div className="post-wrap">


                                            <div className="content">


                                                <h4 className="title"><Link to={category+ "/" + item?.url}>{item.title.length > 50 ? item.title.substring(0, 50) + "..." : item.title}</Link></h4>


                                                <div className="meta fix">
                                                    {/* <a href="#" className="meta-item author"><i className="fa fa-user"></i> Fahmida Bhuiyan</a> */}
                                                    {/* <span className="meta-item date"><i className="fa fa-clock-o"></i>{moment(item?.created_at).format("DD MMM YYYY")}</span> */}
                                                </div>
                                                <p>{item.meta_description.length > 150 ? item.meta_description.substring(0, 150) + "..." : item.meta_description}</p>

                                            </div>

                                        </div>
                                    </div>


                                }
                            </>
                        )
                    })}

                </div>

            </div>

        </div>
    )
}
