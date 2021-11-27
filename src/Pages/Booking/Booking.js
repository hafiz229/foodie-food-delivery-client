import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Booking.css";

const Booking = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  const onSubmit = (data) => {
    axios
      .post("https://frightening-pumpkin-71085.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Item Purchased Successfully");
          reset();
        }
      });
  };
  console.log(user);
  useEffect(() => {
    fetch(
      `https://frightening-pumpkin-71085.herokuapp.com/services/${serviceId}`
    )
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return (
    <div>
      <h2 className="fw-bold my-3">{service.name} Details</h2>
      <div className="booking container d-lg-flex align-items-center justify-content-center shadow rounded p-3">
        <div className="col-lg-6">
          <img src={service.img} alt="" />
        </div>
        <div>
          <h3 className="text-start fw-bold">{service.name}</h3>
          <h5 className="text-start">Price: {service.price}</h5>
          <h5 className="text-start">Status: {service.status}</h5>
          <p className="w-100 text-start">{service.description}</p>
        </div>
      </div>
      <div className="add-service">
        <h2 className="fw-bold my-3">Fill Up the form to purchase</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue={user.displayName}
            {...register("name", { required: true })}
          />
          <input
            defaultValue={user.email}
            {...register("email", { required: true })}
          />
          <input
            defaultValue={service.name}
            {...register("order", { required: true })}
          />
          <input
            type="number"
            defaultValue={service.price}
            {...register("price", { required: true })}
            placeholder="Enter Service Price (max 4 digits)"
          />
          {errors.email && (
            <span className="error">This field is required</span>
          )}

          <input
            placeholder="Address"
            defaultValue=""
            {...register("address")}
          />
          <input placeholder="Phone" defaultValue="" {...register("phone")} />
          <input
            defaultValue={service.status}
            {...register("status", { required: true })}
          />
          <input
            style={{
              backgroundColor: "rgb(93, 63, 211)",
              color: "white",
              width: "10%",
            }}
            className="rounded shadow"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Booking;
