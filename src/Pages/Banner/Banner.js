import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="container d-lg-flex align-items-center justify-content-between">
        <div className="text-start">
          <h1
            style={{ fontSize: "50px", fontWeight: "bolder", width: "400px" }}
          >
            <span>Quick</span> food <span>delivery</span> at your doorstep
          </h1>
          <p style={{ width: "400px" }}>
            Order your products at any time and we will deliver them directly to
            your home.
          </p>
          <br />
          <Button style={{ backgroundColor: "rgb(93, 63, 211)" }}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/home#services"
            >
              Make an order
            </Link>
          </Button>
        </div>
        <div className="text-start">
          <img
            className="ms-5 col-9 banner-img"
            src="https://image.freepik.com/free-vector/take-away-concept-illustration_114360-2982.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
