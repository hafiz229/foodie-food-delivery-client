import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, setUser } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(url);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2 className="fw-bold my-3">Sing In / Sign Up with Google</h2>
      <Button
        onClick={handleGoogleLogin}
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
