import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FetchApi } from '../../API/FetchApi';
import { Endpoints } from '../../API/Endpoints';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Loader from '../Loader/Index';


export default function Listing() {

    const [data, setData] = useState([]);
    const [MagazineData, setMagazineData] = useState("");
    const [loader, setLoader] = useState(false);
    const param = useParams();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        const getData = async () => {
            setLoader(true);
            try {
                let resp = await FetchApi(Endpoints.GetListing + "/" + param?.slug);
                if (resp && resp.status === true) {
                    setData(resp.data?.featuredpeople);
                    setMagazineData(resp.data?.magazin);
                }
            } catch (e) {
                if (e && e.response && e.response.data && e.response.data.message) {
                    console.log(e.response.data.message);
                }
            } finally {
                setLoader(false);
            }
        };

        getData();
    }, [param?.slug, location.pathname]);
   
    return (
        <>
            {loader ?
                <Loader />
                :
                <>
                    <Header />
                    <div className="post-header-section section mt-30 mb-30">
                        <div className="container">
                            <div className="row row-1">
                                <div className="col-12">
                                    <div className="post-header" style={{ "background-image": "url(../img/bg/page-banner-fashion.jpg)" }}>
                                        <h3 className="title">The Executive Headlines</h3>
                                        <div className="meta fix">

                                            <span className="meta-item date"><i className="fa fa-clock-o"></i>{MagazineData?.issue_month} Edition {MagazineData?.issue_year}</span>

                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="post-section section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12 mb-50">

                                    <div className="mb-20 text-center w-100 ">
                                        <Link to={"/magazine/" + MagazineData?.url}>
                                            <img src={Endpoints.ImageUrl + MagazineData?.issue_logo} alt="" className="w-50 border p-2" />
                                        </Link>
                                    </div>

                                    <div className="card">
                                        <div className="card-header text-center">
                                            <h1>
                                                {MagazineData?.issue_title}
                                            </h1>

                                        </div>
                                        <div className="card-body">
                                            <table className="table table-bordered text-center">
                                                <thead>
                                                    <tr className="table-danger">
                                                        <th>Company</th>
                                                        <th>Management</th>
                                                        <th>Description</th>
                                                    </tr>
                                                </thead>
                                                <tbody >
                                                    {data.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td width={"25%"}>
                                                                    {item?.url === null ?
                                                                        <Link className="text-primary">{item?.featured_company_name}</Link>
                                                                        :
                                                                        <Link className="text-primary" to={"/feature/" + item?.url}>{item?.featured_company_name}</Link>
                                                                    }
                                                                    <br />
                                                                    <Link className="text-primary" to={"http://" + item?.featured_company_website} target={"_blank"}>{item?.featured_company_website}</Link>
                                                                </td>
                                                                <td width={"25%"}>
                                                                    {item?.featured_people_name}<br />
                                                                    {item?.featured_people_position}
                                                                </td>
                                                                <td>
                                                                    {item?.featured_people_description}
                                                                </td>
                                                            </tr>
                                                        )
                                                    })}



                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            }
        </>
    )
}
