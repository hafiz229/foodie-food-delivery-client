import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css";

// My Orders, Manage All Orders, Add A New Service, Logout
const Header = () => {
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
            <Nav.Link as={Link} to="/newservice">
              Add New Service
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
