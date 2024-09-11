import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className="hero-section section fix">
      <div className="container-fluid p-0">
        <div className="text-center leader w-100" style={{
          marginTop: "300px",
          marginLeft: "700px",
          overflowY: "hidden"
        }}>
          <ThreeDots
            visible={true}
            height="100"
            width="100"
            color="#0d6efd"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </div>
    </div>
  )
}
