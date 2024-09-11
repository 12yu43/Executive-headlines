import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const $ = window.jQuery;
function Header() {
    const location = useLocation();
    const [searchText, setSearchText] = useState('');
    const Navigate = useNavigate();




    useEffect(() => {
        $('.mobile-menu-wrap').meanmenu({
            meanScreenWidth: '767',
            meanMenuContainer: '.mobile-menu',
            meanMenuClose: '<span class="menu-close"></span>',
            meanMenuOpen: '<span class="menu-bar"></span>',
            meanRevealPosition: 'left',
            meanMenuCloseSize: '0',
        });
    }, []);

    const handleSearch = () => {
        if (searchText) {
            Navigate("/search/" + searchText);
        }
    };

    const relaod = () => {
        Navigate("/")
        window.location.reload();

    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [location.pathname]);
    return (
        <>

            <div className="header-section  d-none d-md-block ">
                <div className=" mb-3 mt-1">
                    <div className="d-flex">


                        <div className="header-logo d-none d-md-block me-auto container">
                            <Link to="/" className="logo" onClick={relaod}><img src="../../img/logo.png" alt="Logo" className="header-logo-image"

                            /></Link>
                        </div>
                        <div className="mt-4">
                            <div className="header-search float-end " >

                                <button className="header-search-toggle rounded" onClick={() => {
                                    handleSearch()
                                }}><i className="fa fa-search"></i></button>

                                <div className="header-search-form">
                                    <form onSubmit={handleSearch}>

                                        <input type="text" placeholder="Search Here"
                                            value={searchText}
                                            onChange={(e) => {
                                                setSearchText(e.target.value)
                                            }}
                                            required
                                        />

                                    </form>
                                </div>

                            </div>

                        </div>



                    </div>
                </div>
            </div>
            <div className="menu-section section bg-dark">
                <div className="px-2 ml-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-section-wrap">
                                <div className="main-menu float-start d-none d-md-block ">
                                    <nav>
                                        <ul className="px-5">

                                            <li className="active"><Link to="/" onClick={relaod}>Home</Link>
                                            </li>
                                            <li className="has-dropdown"><Link to="#">Technology</Link>


                                                <ul className="sub-menu">
                                                    <li><Link to="/technology/software">Software</Link></li>
                                                    <li><Link to="/technology/Big-data">Big Data</Link></li>
                                                    <li><Link to="/technology/Security">Security</Link></li>
                                                    <li><Link to="/technology/Data-analytics">Data Analytics</Link></li>
                                                    <li><Link to="/technology/Cyber-security">Cyber Security</Link></li>
                                                    <li><Link to="/technology/Iot">IoT</Link></li>
                                                    <li><Link to="/technology/Networking">Networking</Link></li>
                                                    <li><Link to="/technology/IT-services">IT Services</Link></li>
                                                    <li><Link to="/technology/Storage">Storage</Link></li>
                                                </ul>

                                            </li>
                                            <li className="has-dropdown"><Link to="#">Industry</Link>


                                                <ul className="sub-menu">
                                                    <li><Link to="/industry/Healthcare">Healthcare</Link></li>
                                                    <li><Link to="/industry/Retail">Retail</Link></li>
                                                    <li><Link to="/industry/Telecom">Telecom</Link></li>
                                                    <li><Link to="/industry/banking-finance">Banking & Finance</Link></li>
                                                    <li><Link to="/industry/education">Education</Link></li>
                                                    <li><Link to="/industry/legal">Legal</Link></li>
                                                    <li><Link to="/industry/media-entertainment">Media & Entertainment</Link></li>
                                                    <li><Link to="/industry/food-beverage">Food & Beverage</Link></li>
                                                    <li><Link to="/industry/ERP">ERP</Link></li>
                                                    <li><Link to="/industry/digital-marketing">Digital Marketing</Link></li>
                                                    <li><Link to="/industry/Business">Business</Link></li>
                                                </ul>

                                            </li>
                                            <li><Link to="/magazines">Magazines</Link>
                                            </li>
                                            <li><Link to="/featured-vendors">Our Clients</Link></li>
                                            <li><Link to="/startup-insights">Startup Insights</Link></li>

                                            <li><Link to="/cxo">CXOs</Link></li>
                                            <li><Link to="/leader-speaks">Leaders Speak</Link></li>
                                            <li><Link to="/video">Videos</Link></li>
                                            <li className="has-dropdown"><Link to="#">News/Blogs</Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="/sports">Sports</Link></li>
                                                    <li><Link to="/lifestyle">Life Style</Link></li>
                                                    <li><Link to="/entrepreneurs">Entrepreneurs</Link></li>
                                                    <li><Link to="/entertainment-media">Entertainment & Media</Link></li>
                                                    <li><Link to="/awards-events">Awards & Events</Link></li>

                                                </ul>

                                            </li>

                                        </ul>
                                    </nav>
                                </div>

                                <div className="mobile-logo d-md-none"><Link to="/"><img src="../img/logo.png" alt="Logo" /></Link></div>




                                <div className="mobile-menu-wrap d-none ">
                                    <nav>
                                        <ul>

                                            <li className="active"><Link to="/">Home</Link>
                                            </li>
                                            <li className="has-dropdown"><Link to="#">Technology</Link>


                                                <ul className="sub-menu">
                                                    <li><Link to="/technology/software">Software</Link></li>
                                                    <li><Link to="/technology/Big-Data">Big Data</Link></li>
                                                    <li><Link to="/technology/Security">Security</Link></li>
                                                    <li><Link to="/technology/Data-Analytics">Data Analytics</Link></li>
                                                    <li><Link to="/technology/Cyber-Security">Cyber Security</Link></li>
                                                    <li><Link to="/technology/IoT">IoT</Link></li>
                                                    <li><Link to="/technology/Networking">Networking</Link></li>
                                                    <li><Link to="/technology/IT-Services">IT Services</Link></li>
                                                    <li><Link to="/technology/Storage">Storage</Link></li>
                                                </ul>

                                            </li>
                                            <li className="has-dropdown"><Link to="#">Industry</Link>


                                                <ul className="sub-menu">
                                                    <li><Link to="/industry/Healthcare">Healthcare</Link></li>
                                                    <li><Link to="/industry/Retail">Retail</Link></li>
                                                    <li><Link to="/industry/Telecom">Telecom</Link></li>
                                                    <li><Link to="/industry/banking-finance">Banking & Finance</Link></li>
                                                    <li><Link to="/industry/education">Education</Link></li>
                                                    <li><Link to="/industry/legal">Legal</Link></li>
                                                    <li><Link to="/industry/media-entertainment">Media & Entertainment</Link></li>
                                                    <li><Link to="/industry/food-beverage">Food & Beverage</Link></li>
                                                    <li><Link to="/industry/ERP">ERP</Link></li>
                                                    <li><Link to="/industry/digital-marketing">Digital Marketing</Link></li>
                                                    <li><Link to="/industry/Business">Business</Link></li>
                                                </ul>

                                            </li>
                                            <li ><Link to="/magazines">Magazine</Link>

                                            </li>
                                            <li><Link to="/featured-vendors">Our Clients</Link></li>
                                            <li><Link to="/startup-insights">Startup Insights</Link></li>

                                            <li><Link to="/cxo">CXOs</Link></li>
                                            <li><Link to="/leader-speaks">Leaders Speak</Link></li>
                                            <li><Link to="/video">Videos</Link></li>
                                            <li className="has-dropdown"><Link to="#">News/Blogs</Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="/sports">Sports</Link></li>
                                                    <li><Link to="/lifestyle">Life Style</Link></li>
                                                    <li><Link to="/entrepreneurs">Entrepreneurs</Link></li>
                                                    <li><Link to="/entertainment-media">Entertainment & Media</Link></li>
                                                    <li><Link to="/awards-events">Awards & Events</Link></li>

                                                </ul>

                                            </li>

                                        </ul>
                                    </nav>
                                </div>


                                <div className="mobile-menu"></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Header;
