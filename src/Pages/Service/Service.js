import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, name, price, description, img } = service;
  console.log(service);

  return (
    <div>
      <div className="service shadow">
        <img src={img} alt="" />
        <div className="text-start px-5">
          <h3 className="menu-item">{name}</h3>
          <h5>Price: {price}</h5>
          <p>{description}</p>
          <Link to={`/booking/${_id}`}>
            <button
              className="btn mb-3"
              style={{ backgroundColor: "rgb(93, 63, 211)", color: "white" }}
            >
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
