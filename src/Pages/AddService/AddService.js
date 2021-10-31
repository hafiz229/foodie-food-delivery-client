import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("One Item Inserted Successfully");
        reset();
      }
    });
  };
  return (
    <div className="add-service">
      <h2 className="fw-bold my-3">Please Add a New Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 15 })}
          placeholder="Enter Service Name (max 15 characters)"
        />
        <textarea
          {...register("description", { required: true, maxLength: 180 })}
          placeholder="Enter Service Description (max 180 characters)"
        />
        <input
          type="number"
          {...register("price", { required: true, maxLength: 4 })}
          placeholder="Enter Service Price (max 4 digits)"
        />
        <input
          {...register("img", { required: true })}
          placeholder="Enter Service Image url"
        />
        <input
          {...register("key", { required: true })}
          placeholder="Enter a Key (X008RL8IYK format)"
        />
        <select {...register("status", { required: true })}>
          <option value="Pending" className="text-center">
            Pending
          </option>
        </select>
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
  );
};

export default AddService;
