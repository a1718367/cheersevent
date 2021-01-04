import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

export default function Navibar() {
  const { currentUser, logout, login, signup } = useAuth();
  const [uid, setUid] = useState();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  useEffect(() => {
    if (currentUser) {
      setUid(currentUser.uid);
    } else {
      setUid();
    }
  }, [currentUser]);

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">Cheers</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Region" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Region1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Region2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Region3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          {uid ? (
            <>
              <Nav.Link href="/userprofile">User Profile</Nav.Link>
              <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
