import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

//import { userLogout } from "../../api/userApi";

export const Header = () => {
  const history = useHistory();

  const logMeOut = () => {
    // sessionStorage.removeItem("accessJWT");
    //localStorage.removeItem("crmSite");
    // userLogout();
    history.push("/");
  };

  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/tickets">Tickets</NavLink>
          <NavLink to="/logout">Logout</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
