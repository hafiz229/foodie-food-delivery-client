import React from "react";
import "./Menus.css";

const Menus = () => {
  return (
    <div>
      <h1 className="fw-bold my-3">Our Menus</h1>
      <div className="container menu-container px-3 d-lg-flex justify-content-center align-items-center">
        <div class="card menu-border shadow" style={{ width: "18rem" }}>
          <img
            style={{ height: "200px" }}
            src="https://image.freepik.com/free-vector/sticker-template-with-pizza-isolated_1308-62307.jpg"
            class="card-img-top rounded-circle menu-img p-3"
            alt="..."
          />
          <div class="card-body menu-item">
            <p class="card-text">Pizza</p>
          </div>
        </div>
        <div class="card menu-border shadow" style={{ width: "18rem" }}>
          <img
            style={{ height: "200px" }}
            src="https://image.freepik.com/free-vector/hamburger_53876-25481.jpg"
            class="card-img-top rounded-circle menu-img p-3"
            alt="..."
          />
          <div class="card-body menu-item">
            <p class="card-text">Burger</p>
          </div>
        </div>
        <div class="card menu-border shadow" style={{ width: "18rem" }}>
          <img
            style={{ height: "200px" }}
            src="https://image.freepik.com/free-vector/flying-fried-chicken-with-bucket-cartoon_138676-2081.jpg"
            class="card-img-top rounded-circle menu-img p-3"
            alt="..."
          />
          <div class="card-body menu-item">
            <p class="card-text">Fried Chicken</p>
          </div>
        </div>
        <div class="card menu-border shadow" style={{ width: "18rem" }}>
          <img
            style={{ height: "200px" }}
            src="https://image.freepik.com/free-vector/modern-juice-colourfull-logo_91719-70.jpg"
            class="card-img-top rounded-circle menu-img p-3"
            alt="..."
          />
          <div class="card-body menu-item">
            <p class="card-text">Drink</p>
          </div>
        </div>
        <div class="card menu-border shadow" style={{ width: "18rem" }}>
          <img
            style={{ height: "200px" }}
            src="https://image.freepik.com/free-vector/breakfast-sandwich-top-view-realistic-image_1284-14462.jpg"
            class="card-img-top rounded-circle menu-img p-3"
            alt="..."
          />
          <div class="card-body menu-item">
            <p class="card-text">Sandwich</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
