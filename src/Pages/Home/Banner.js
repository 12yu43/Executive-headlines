import React from 'react'
import { Link } from 'react-router-dom';
import { Endpoints } from '../../API/Endpoints';

export default function Banner({ Data, index }) {


    return (
        <div className="row mb-50" key={index}>
            {Data.map((item, ind) => {
                if (parseInt(index) != parseInt(ind)) return null;
                return (
                    <div className="col-12" key={ind}>

                        <Link to="#" className="post-middle-banner"><img src={Endpoints.ImageUrl + item?.image} alt="Banner" /></Link>
                    </div>
                )
            })}


        </div>
    )
}
