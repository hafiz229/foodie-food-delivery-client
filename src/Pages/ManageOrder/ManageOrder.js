import React from "react";
import { Link } from "react-router-dom";

const ManageOrder = ({ allorder }) => {
  console.log(allorder);
  const { name, email, order, price, address, phone, status } = allorder;
  console.log(allorder);
  return (
    <div>
      <div className="service shadow">
        <div className="text-start px-5">
          <h3 className="fw-bold">{order}</h3>
          <h3>Name: {name}</h3>
          <h3>Email: {email}</h3>
          <h5>Price: {price}</h5>
          <h5>Address: {address}</h5>
          <h5>Phone: {phone}</h5>
          <h5>Status: {status}</h5>
          <Link to="/home#services">
            <button
              className="btn mb-3"
              style={{ backgroundColor: "rgb(93, 63, 211)", color: "white" }}
            >
              Order Again
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
