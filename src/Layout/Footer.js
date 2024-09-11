import React from "react";
import { Link } from "react-router-dom";
import FooterMagazine from "./FooterMagazine";


function Footer() {
    return (
        <>

            <div className="footer-top-section section bg-dark">
                <div className="container-fluid">
                    <div className="row">
                        <div className="footer-widget col-xl-5 col-md-12 col-12 ">

                            <img src={"../img/footer-logo.png"} alt="" className="w-100" />
                            {/* <h4 className="widget-title">About Us</h4> */}

                            <div className="content fix">
                                <p>Elevate your understanding of the world of business with Best Business Magazine and news platform. The Executive Headlines genuinely support all top business leaders and the innovative technological ecosystem that surrounds and engages with them.
                                    The company's logo encapsulates our entire idea; it comprises a magazine for influential business leaders and decision-makers.
                                    Offering up-to-the-minute, all-encompassing news coverage, market perspectives, and exclusive dialogues with corporate pioneers, we are your ultimate destination for remaining at the vanguard of the business sphere.
                                    Enroll with us today and position yourself at the forefront of business acumen with Best News Platform and Business Magazine.</p>


                                <ol className="footer-contact">
                                    <li><i className="fa fa-home"></i>Executive Headlines LLC, 440 N BARRANCA   AVE, UNIT 1786 COVINA, CA 91723</li>
                                    <li><i className="fa fa-envelope-open"></i>sales@executiveheadlines.com</li>
                                    <li><i className="fa fa-globe"></i>www.executiveheadlines.com</li>

                                </ol>

                                <h6 className="text-white">Social Media</h6>
                                <div className="footer-social">
                                    <a href="https://www.facebook.com/executiveheadlinesmagazine/" className="facebook" target={"_blank"}><i className="fa fa-facebook"></i></a>

                                    &nbsp;
                                    <a href="https://www.instagram.com/theexecutiveheadlines/" className="dribbble" target={"_blank"}><i className="fa fa-instagram"></i></a>
                                    &nbsp;
                                    <a href="https://www.linkedin.com/company/the-executive-headlines/?viewAsMember=true" className="google-plus" target={"_blank"}><i className="fa fa-linkedin"></i></a>
                                    &nbsp;
                                    <a href="https://www.youtube.com/channel/UCK490L6vb8-9LSXpqzYSLjA" className="facebook" target={"_blank"}><i className="fa fa-youtube"></i></a>
                                    &nbsp;
                                    <a href="https://in.pinterest.com/theexecutiveheadlines/_created/" className="twitter" target={"_blank"}><i className="fa fa-pinterest"></i></a>
                                    &nbsp;

                                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FTEHeadlines" className="twitter-white" target={"_blank"}

                                    >
                                        <img src="../img/twitter.png" alt="" style={{
                                            width: "16px",
                                            height: "16px",
                                            marginTop: "10px",
                                            verticalAlign: "unset"
                                        }} />

                                    </a>
                                    &nbsp;
                                </div>

                            </div>

                        </div>
                        <div className="footer-widget col-xl-2 col-md-12 col-12 mt-50">
                            <h3 className="text-white">Quick Links</h3>
                            <ul className="header-links header-links-2 text-white">
                                <li><Link to="/about-us" className="mt-3"> About Us</Link></li>
                                <li><Link to="/contact-us" className="mt-3"> Contact Us</Link></li>
                                <li><Link to="/reprint-permission" className="mt-3"> Reprint & Permission</Link></li>
                                <li><Link to="/disclaimer" className="mt-3"> Disclaimer</Link></li>
                                <li><Link to="/privacy-policy" className="mt-3"> Privacy Policy</Link></li>
                                <li><Link to="/advertise" className="mt-3"> Advertise</Link></li>
                            </ul>
                        </div>

                        <FooterMagazine />

                    </div>
                </div>
            </div>
            <div className="footer-bottom-section section bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="copyright text-center col">
                            <p>© 2024 The Executive Headlines. All rights reserved.</p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer;
