import React from "react";

const AboutUs = () => {
  return (
    <div>
      <h1 className="py-3">About Us</h1>
      <div className="d-lg-flex align-items-center justify-content-between">
        <div className="text-start">
          <img
            className="ms-5 side-img col-4"
            src="https://i.ibb.co/0cBJDFv/teamwork-concept-landing-page-52683-20165.jpg"
            alt=""
          />
        </div>
        <div className="container text-start col-4">
          <h1
            style={{ fontSize: "40px", fontWeight: "bolder", width: "400px" }}
          >
            Make Your Work Easier With Us
          </h1>
          <p style={{ width: "400px" }}>
            Foodie is a platform for your business seamless functioning.
          </p>
          <p style={{ width: "400px" }}>
            Accept orders, manage couriers schedules, automate the cration of a
            personal account for every client.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
