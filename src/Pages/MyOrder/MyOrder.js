import React from "react";

const MyOrder = ({ myOrder, handleDelete }) => {
  const { _id, name, email, order, price, address, phone, status } = myOrder;
  return (
    <div>
      <div className="service shadow">
        <div
          className="text-start px-3"
          style={{ height: "350px", width: "450px" }}
        >
          <h3 className="fw-bold py-3">{order}</h3>
          <h3>Name: {name}</h3>
          <h5>Email: {email}</h5>
          <h5>Price: {price}</h5>
          <h5>Address: {address}</h5>
          <h5>Phone: {phone}</h5>
          <h5>
            Status: <span className="fw-bold text-dark">{status}</span>
          </h5>
          {status !== "approved" && (
            <button
              className="btn mb-3"
              style={{ backgroundColor: "rgb(93, 63, 211)", color: "white" }}
              onClick={() => handleDelete(_id)}
            >
              Cancel Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
