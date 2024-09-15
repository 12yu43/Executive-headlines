import React from 'react';
import { Link } from 'react-router-dom';
import { Endpoints } from '../../API/Endpoints';


export default function Sport({ pageType, data, category }) {

    return (
        <div className="col-lg-4 col-md-6 col-12 mb-50 d-flex">
            <div className="post-block-wrapper">
                <div className={pageType === "Sports" ? "head video-head" : "head video-head"}  >
                    <h4 className="title">{pageType}</h4>
                </div>
                <div className="body">
                    {data.map((item, index) => {
                        if (index > 3) return null;
                        return (
                            <>
                                {index === 0 ?
                                    <div className="post sports-post post-separator-border">
                                        <div className="post-wrap">
                                            <Link className="image" to={category + "/" + item?.url}><img src={Endpoints.ImageUrl + item?.images} alt={item?.image_alt} /></Link>
                                            <div className="content">
                                                <h5 className="title"><Link to={category + "/" +  item?.url}>{item.title.length > 50 ? item.title.substring(0, 50) + "..." : item.title}</Link></h5>

                                                <p>{item.meta_description.length > 150 ? item.meta_description.substring(0, 150) + "..." : item.meta_description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    :
                                    <div className="post post-small post-list sports-post post-separator-border">
                                        <div className="post-wrap">
                                            <Link className="image" to={category + "/" +  item?.url}><img src={Endpoints.ImageUrl + item?.images} alt={item?.image_alt} /></Link>
                                            <div className="content">
                                                <h5 className="title"><Link to={category + "/" +  item?.url}>{item.title.length > 50 ? item.title.substring(0, 50) + "..." : item.title}</Link></h5>

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
