import React from "react";

const ManageOrder = ({ allorder, handleDelete, handleApprove }) => {
  console.log(allorder);
  const { _id, name, email, order, price, address, phone, status } = allorder;
  console.log(allorder);
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
          <button
            className="btn mb-3"
            style={{ backgroundColor: "rgb(93, 63, 211)", color: "white" }}
            onClick={() => handleDelete(_id)}
          >
            Cancel Order
          </button>
          {status !== "approved" && (
            <button
              className="btn ms-3 mb-3"
              style={{ backgroundColor: "rgb(93, 63, 211)", color: "white" }}
              onClick={() => handleApprove(_id, "approved")}
            >
              Confirm Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
