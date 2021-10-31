import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <small className="my-3" style={{ color: "red" }}>
        Error code: 404
      </small>
      <h2 className="my-3">
        We can't seem to find the page you're looking for.
      </h2>
      <Link to="/home" className="my-3">
        <Button
          style={{
            backgroundColor: "rgb(93, 63, 211)",
            color: "white",
            width: "12%",
          }}
          className="rounded shadow"
        >
          Visit Home Page
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
