import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div>
      <h2 className="fw-bold my-3">Sing In / Sign Up with Google</h2>
      <Button
        onClick={signInUsingGoogle}
        style={{
          backgroundColor: "rgb(93, 63, 211)",
          color: "white",
          width: "12%",
        }}
        className="rounded shadow"
      >
        Google Sign In
      </Button>
    </div>
  );
};

export default Login;
