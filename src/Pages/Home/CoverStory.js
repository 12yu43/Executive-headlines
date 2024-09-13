import React from 'react';
import { Link } from 'react-router-dom';
import { Endpoints } from '../../API/Endpoints';


export default function CoverStory({ data }) {

    return (
      <div className="row mb-50 d-flex g-5">
        <div className="col-lg-8 col-12 d-flex">
          <div className="post-block-wrapper">
            <div className="head video-head">
              <h4 className="title"> Cover Features</h4>

              <ul class="post-block-tab-list fashion-post-tab-list nav d-none d-md-block video-head">
                <li>
                  <Link class="" to="/magazines">
                    <h4 className="title">View More</h4>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="body pb-0">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="fashion-cat-2">
                  <div className="row ">
                    <div className="col-md-6 col-12 mb-20">
                      {data.map((item, index) => {
                        if (index > 1) return null;
                        return (
                          <div
                            className="post fashion-post post-separator-border"
                            key={index}
                          >
                            <div className="post-wrap">
                              <Link
                                className="image"
                                to={"/cover-story/" + item?.url}
                              >
                                <img
                                  src={Endpoints.ImageUrl + item?.images}
                                  alt={item?.image_alt}
                                />
                              </Link>
                              <div className="content">
                                <h4 className="title">
                                  <Link to={"/cover-story/" + item?.url}>
                                    {item?.title}
                                  </Link>
                                </h4>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="col-md-6 col-12 mb-20">
                      {data.map((item, index) => {
                        if (index < 2 || index > 6) return null;
                        return (
                          <div className="post post-small post-list fashion-post post-separator-border">
                            <div className="post-wrap">
                              <Link
                                className="image"
                                to={"/cover-story/" + item?.url}
                              >
                                <img
                                  src={Endpoints.ImageUrl + item?.images}
                                  alt={item?.image_alt}
                                />
                              </Link>
                              <div className="content">
                                <h5 className="title">
                                  <Link to={"/cover-story/" + item?.url}>
                                    {item?.title.length > 45
                                      ? item.title.substring(0, 45) + "..."
                                      : item.title}
                                  </Link>
                                </h5>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-12 d-flex">
          <div className="row ">
            <div className="single-sidebar col-12 d-flex">
              <div className="sidebar-block-wrapper ">
                <div className="head video-head">
                  <h4 className="title my-1">Cover Features</h4>
                </div>

                <div className="body">
                  <div className="row">
                    {data.map((item, index) => {
                      if (index < 7 || index > 11) return null;
                      return (
                        <div className="post post-small post-list life-style-post post-separator-border col-lg-12 col-md-6 col-12 mt-2">
                          <div className="post-wrap">
                            <Link
                              className="image"
                              to={"/cover-story/" + item?.url}
                            >
                              <img
                                src={Endpoints.ImageUrl + item?.images}
                                alt={item?.image_alt}
                              />
                            </Link>
                            <div className="content">
                              <h5 className="title">
                                <Link to={"/cover-story/" + item?.url}>
                                  {item?.title.length > 40
                                    ? item.title.substring(0, 40) + "..."
                                    : item.title}
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
