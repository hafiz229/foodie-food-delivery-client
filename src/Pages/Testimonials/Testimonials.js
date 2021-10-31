import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div>
      <h1 className="fw-bold my-3">Testimonials</h1>
      <div className="container reviews px-3 d-lg-flex justify-content-center align-items-center">
        <div className="card shadow" style={{ width: "18rem" }}>
          <img
            src="https://image.freepik.com/free-photo/satisfied-bald-middle-aged-man-smiling-showing-thumbs-up_176420-18453.jpg"
            className="card-img-top rounded-circle menu-img p-3"
            alt="..."
          />
          <div className="card-body text-start">
            <span>
              <small>Dick Garyson</small>
            </span>
            <p className="card-text menu-item">Unbelievable quality!</p>
            <p className="card-text">
              Totally satisfied with their food quality, highly recommended
              anyone want's to deliver food online.
            </p>
          </div>
        </div>
        <div className="card shadow" style={{ width: "18rem" }}>
          <img
            src="https://image.freepik.com/free-photo/smiling-optimistic-man-show-thumb-up-approve-recommend_176420-17852.jpg"
            className="card-img-top rounded-circle menu-img p-3"
            alt="..."
          />
          <div className="card-body text-start">
            <span>
              <small>Jason Todd</small>
            </span>
            <p className="card-text menu-item">Awesome work!</p>
            <p className="card-text">
              This food delivery service has left the best impressions!
              delicious dishes, and wonderful dessert
            </p>
          </div>
        </div>
        <div className="card shadow" style={{ width: "18rem" }}>
          <img
            src="https://image.freepik.com/free-photo/young-telemarketer-man-isolated-wall_1368-72590.jpg"
            className="card-img-top rounded-circle menu-img p-3"
            alt="..."
          />
          <div className="card-body text-start">
            <span>
              <small>Damien Wayne</small>
            </span>
            <p className="card-text menu-item">Awesome work!</p>
            <p className="card-text">
              The customer service was wonderful. This is the best platform
              among other delivery competitors! Thank you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
