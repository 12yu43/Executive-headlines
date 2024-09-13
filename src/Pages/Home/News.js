import React from 'react';
import { Link } from 'react-router-dom';
import { Endpoints } from '../../API/Endpoints';
export default function News({ pageName, item }) {

    return (
        <>
            {item?.length > 0 ?
                <div className="col-lg-4 col-md-6 col-12 mb-50 d-flex">
                    <div className="post-block-wrapper">
                        <div className={pageName === "Techonology News" ? "head video-head" : pageName === "Business News" ? "head video-head" : "head video-head"}>
                            <h4 className="title">{pageName}</h4>
                        </div>
                        <div className="body">
                            <div >
                                {item?.length > 0 ?
                                    item.map((item, index) => {
                                        if (index > 3) return null;
                                        return (
                                            <div className="post post-small post-list life-style-post post-separator-border col-lg-12 col-md-6 col-12" key={index}>
                                                <div className="post-wrap">

                                                    <Link className="image" to={pageName === "Techonology News" ? item?.cat_slug.replace(/\s+/g, '-').toLowerCase() + "/" + item?.url : pageName === "Business News" ? "/cxo/" + item?.url : item?.cat_slug.replace(/&/g, '').replace(/\s+/g, '-').toLowerCase() + "/" + item?.url}>

                                                        <img src={Endpoints.ImageUrl + item.images} alt={item.image_alt} className="news_image" />
                                                    </Link>

                                                    <div className="">

                                                        <h5 className="title"><Link to={pageName === "Techonology News" ? item?.cat_slug.replace(/\s+/g, '-').toLowerCase() + "/" + item?.url : pageName === "Business News" ? "cxo/" + item?.url : item?.cat_slug.replace(/&/g, '').replace(/\s+/g, '-').toLowerCase() + "/" + item?.url}>{item.title?.length > 30 ? item?.title?.substring(0, 30) + "..." : item.title}</Link></h5>

                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    })

                                    : ""}
                            </div>
                        </div>
                    </div>
                </div>
                : ""}
        </>
    )
}
