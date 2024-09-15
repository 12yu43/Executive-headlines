import React, { useEffect, useState, useCallback } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FetchApi } from '../../API/FetchApi';
import { Endpoints } from '../../API/Endpoints';
import Subscribe from '../Home/Subscribe';
import Follow from '../Home/Follow';
import { Helmet } from 'react-helmet';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Loader from '../Loader/Index';

const Search = () => {
  const [technologyData, setTechnologyData] = useState([]);
  const [industryData, setIndustryData] = useState([]);
  const [magazineData, setMagazineData] = useState([]);
  const [cxoData, setCxoData] = useState([]);
  const [startupData, setStartupData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useParams();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [search, location.pathname]);

  // Fetch data
  const handleGetData = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await FetchApi(`${Endpoints.GetSearch}/${search}`);
      if (resp && resp.status) {
        setTechnologyData(resp.data?.technology || []);
        setIndustryData(resp.data?.industry || []);
        setMagazineData(resp.data?.magazine || []);
        setCxoData(resp.data?.cxo || []);
        setStartupData(resp.data?.startup || []);
      }
    } catch (e) {
      console.error('Error fetching data:', e);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  const renderPosts = (data, category) => (
    data.map((item, index) => (
      <div className="post fashion-post post-default-list post-separator-border" key={index}>
        <div className="post-wrap">
          <Link className="image" to={`/${category}/${item?.url}`}>
            <img src={`${Endpoints.ImageUrl}${item?.images}`} alt={item?.image_alt} className="client-image" />
          </Link>
          <div className="content">
            <h4 className="title">
              <Link to={`/${category}/${item?.url}`}>
                {item?.title?.length > 50 ? `${item?.title.substring(0, 50)}...` : item?.title}
              </Link>
            </h4>
            <p>
              {item?.meta_description?.length > 100 ? `${item?.meta_description.substring(0, 100)}...` : item?.meta_description}
            </p>
          </div>
        </div>
      </div>
    ))
  );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Helmet>
            <title>The Executive Headlines - Top business magazine & news headlines sources</title>
          </Helmet>
          <div className="page-banner-section section mt-30 mb-30">
            <div className="container">
              <div className="row row-1">
                <div className="col-lg-12 col-12">
                  <div className="page-banner" style={{ backgroundImage: 'url(../img/bg/page-banner-fashion.jpg)' }}>
                    <h2><span className="category-fashion">Search</span></h2>
                    <ol className="page-breadcrumb">
                      <li><Link to="/">Home</Link></li>
                      <li className="active">Search</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="post-section section mt-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12 mb-50">
                  <div className="post-block-wrapper">
                    <div className="body">
                      {renderPosts(technologyData, 'technology')}
                      {renderPosts(industryData, 'industry')}
                      {renderPosts(magazineData, 'magazine')}
                      {renderPosts(cxoData, 'cxo')}
                      {renderPosts(startupData, 'startup-insights')}
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-12 mb-50">
                  <div className="row">
                    <Follow />
                    <Subscribe />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Search;
