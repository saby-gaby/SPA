/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default function () {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg"
            className="d-block w-100"
            style={{ height: "408px", objectFit: "cover" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://th-thumbnailer.cdn-si-edu.com/SdKYWifCKfE2g8O-po_SO99hQ-Y=/1000x750/filters:no_upscale():focal(3126x2084:3127x2085)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/ec/e6/ece69181-708a-496e-b2b7-eaf7078b99e0/gettyimages-1310156391.jpg"
            className="d-block w-100"
            style={{ height: "408px", objectFit: "cover" }}
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
