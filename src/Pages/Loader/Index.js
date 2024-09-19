import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className="hero-section section fix d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="container d-flex justify-content-center">
        <ThreeDots
          visible={true}
          height="100"
          width="100"
          color="#0d6efd"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      </div>
    </div>
  );
}
