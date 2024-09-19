import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchApi } from '../API/FetchApi';
import { Endpoints } from '../API/Endpoints';

export default function FooterMagazine() {
    const [magazineData, setMagazineData] = useState([]);

    useEffect(() => {
        handleGetmagazine();
    }, []);

    const handleGetmagazine = async () => {
        try {
            let resp = await FetchApi(Endpoints.GetMagazine);
            if (resp && resp.status === true) {

                setMagazineData(resp?.data?.data);

            }
        }
        catch (e) {
            if (e && e.response && e.response.data && e.response.data.message) {
                console.log(e.response.data.message)
            }
        }
    };

    return (
        <div className="footer-widget col-xl-5 col-md-12 col-12 mt-45">
            <h3 className="text-white" style={{ fontWeight: 'bold' }}>Latest Magazine</h3>
            <div className="d-flex ">
                {magazineData.map((item, index) => {
                    if (index > 1) return null;
                    return (
                        <div className="m-2" style={{ width: "300px" }}>

                            <div className="post ">
                                <div className="post-wrap  w-100 p-0">
                                    <Link className="image" to={"/magazine/" + item?.url}><img src={Endpoints.ImageUrl + item?.magazine_cover_image} alt="post" className="w-100" /></Link>

                                </div>

                                <div className="post-wrap magazine-title p-0" style={{ paddingTop: '0px' }}>
                                    <Link to={"/magazine/" + item?.url}>
                                        <h6 className="text-white" >{item?.issue_title}</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
