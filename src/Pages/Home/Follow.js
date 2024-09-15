import React from 'react'

export default function Follow() {
    return (
        <div className="single-sidebar col-lg-12 col-md-6 col-12 d-flex">


            <div className="sidebar-block-wrapper">


                <div className="head feature-head">


                    <h4 className="title">Follow Us</h4>

                </div>


                <div className="body">

                    <div className="sidebar-social-follow">
                        <div>
                            <a href="https://www.facebook.com/executiveheadlinesmagazine/" target={"_blank"} rel="noreferrer" className="facebook">
                                <i className="fa fa-facebook"></i>

                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/theexecutiveheadlines/" target={"_blank"} rel="noreferrer" className="google-plus">
                                <i className="fa fa-instagram"></i>


                            </a>
                        </div>
                        <div>
                            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FTEHeadlines" target={"_blank"} rel="noreferrer" className="twitter">
                                {/* <i className="fa fa-twitter"></i> */}
                                <img src="../img/twitter.png" className="fa fa-twitter" alt="" style={{
                                    width: "47px",
                                    height: "47px",
                                    padding: "10px"
                                }} />

                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/company/the-executive-headlines/?viewAsMember=true" target={"_blank"} rel="noreferrer" className="dribbble">
                                <i className="fa fa-linkedin"></i>

                            </a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/channel/UCK490L6vb8-9LSXpqzYSLjA" target={"_blank"} rel="noreferrer" className="twitter">
                                <i className="fa fa-youtube"></i>

                            </a>
                        </div>
                        <div>
                            <a href="https://in.pinterest.com/theexecutiveheadlines/_created/" target={"_blank"} rel="noreferrer" className="facebook">
                                <i className="fa fa-pinterest"></i>

                            </a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
