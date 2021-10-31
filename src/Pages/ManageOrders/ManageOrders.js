import React, { useEffect, useState } from "react";
import ManageOrder from "../ManageOrder/ManageOrder";

const ManageOrders = () => {
  const [allorders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  return (
    <div>
      <h2 className="fw-bold my-3">All Orders</h2>
      <div className="service-container">
        {allorders.map((allorder) => (
          <ManageOrder key={allorder._id} allorder={allorder}></ManageOrder>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
