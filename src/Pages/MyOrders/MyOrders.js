import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);

  // get my orders
  useEffect(() => {
    fetch(
      `https://frightening-pumpkin-71085.herokuapp.com/orders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email]);

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
            const remaining = myOrders.filter((myOrder) => myOrder._id !== id);
            setMyOrders(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h2 className="fw-bold my-3">My Orders</h2>
      <div className="service-container">
        {myOrders.map((myOrder) => (
          <MyOrder
            key={myOrder._id}
            myOrder={myOrder}
            handleDelete={handleDelete}
          ></MyOrder>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
