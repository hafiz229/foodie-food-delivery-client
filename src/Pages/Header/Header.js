import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

// My Orders, Manage All Orders, Add A New Service, Logout
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={HashLink} to="/home#home">
            <img
              className="website-logo"
              alt=""
              src="https://i.pinimg.com/originals/18/59/34/185934dc7ebd4a5d57af0f8a435fd05d.png"
            />{" "}
            Foodie
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/home/#services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/myorders">
              My Orders
            </Nav.Link>
            <Nav.Link as={Link} to="/allorders">
              Manage All Orders
            </Nav.Link>
            <Nav.Link as={Link} to="/addservice">
              Add New Service
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {user?.email ? (
              <Button onClick={logOut} variant="dark">
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Navbar.Text>{user?.displayName}</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
