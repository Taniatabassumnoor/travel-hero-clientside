import React from "react";
import { NavLink } from "react-router-dom";

const HomePageBanner = () => {
  return (
    <div className="">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousalstyle"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.ibb.co/dg3xhYv/Tourist-is-watching-through-binoculars-on-sunny-cloudy-sky-from-mountain-top-sun-rays-man-wear-big-b.jpg"
              className="d-block w-100"
              alt="..."
              style={{ widch: "400px", height: "600px", objectFit: "cover" }}
            />
            <div
              className="carousel-caption d-none d-md-block logo"
              style={{ paddingBottom: "200px", color: "black" }}
            >
              <small>Many Tour Experiences</small>
              <h1>"Bravery & Adventurous Trip"</h1>
            </div>
          </div>

          <div className="carousel-item ">
            <img
              src="https://i.ibb.co/V9zBRT3/Woman-Traveler-hiking-with-backpack-at-mountains-landscape.jpg"
              className="d-block w-100"
              style={{ widch: "400px", height: "600px", objectFit: "cover" }}
              alt="..."
            />

            <div
              className="carousel-caption d-none  d-md-block logo text-dark"
              style={{ paddingBottom: "200px" }}
            >
              <small>Many Tour Experiences</small>
              <h1>"Bravery & Adventurous Trip"</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co/Lrv3H9w/Female-tourists-on-hand-have-a-happy-travel-map.jpg"
              className="d-block w-100"
              style={{ widch: "400px", height: "600px", objectFit: "cover" }}
              alt="..."
            />
            <div
              className="carousel-caption d-none d-md-block logo text-dark "
              style={{ paddingBottom: "200px" }}
            >
              <small>Many Tour Experiences</small>
              <h1>"Bravery & Adventurous Trip"</h1>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomePageBanner;
