import React, { useEffect, useState } from "react";
import ManageOrder from "../ManageOrder/ManageOrder";

const ManageOrders = () => {
  const [allorders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("https://frightening-pumpkin-71085.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  // update the status of an order
  const handleApprove = (id, status) => {
    const order = { status };
    const sure = window.confirm("Are you sure, you want to continue?");
    if (sure === true) {
      fetch(`https://frightening-pumpkin-71085.herokuapp.com/orders/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  // delete an order
  const handleDelete = (id) => {
    // ask for a confirmation before delete an order
    const sure = window.confirm("Are you sure, you want to continue?");
    if (sure === true) {
      const url = `https://frightening-pumpkin-71085.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Deleted Successfully");
            const remaining = allorders.filter(
              (allorder) => allorder._id !== id
            );
            setAllOrders(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h2 className="fw-bold my-3">All Orders</h2>
      <div className="service-container">
        {allorders.map((allorder) => (
          <ManageOrder
            key={allorder._id}
            allorder={allorder}
            handleDelete={handleDelete}
            handleApprove={handleApprove}
          ></ManageOrder>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
