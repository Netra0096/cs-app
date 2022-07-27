import "../App.css";
import React from "react";
import logo from "../cslogo.jpg";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavPage() {
  return (
    <div className="App">
      <Navbar
        bg="myRed"
        variant="dark"
        sticky="top"
        expand="lg"
        collapseOnSelect
      >
        <Navbar.Brand className="my-Margin">
          <img src={logo} width="140px" height="40px" />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="right-alighned">
          <Nav>
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About Us</Nav.Link>

            <NavDropdown title="Products">
              <NavDropdown.Item href="/products/web">Web Technologies</NavDropdown.Item>
              <NavDropdown.Item href="/products/mobile"> Mobile Technologies</NavDropdown.Item>
              <NavDropdown.Item href="/products/desktop">Desktop Applications</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/products/ecom">Ecommerce Solutions</NavDropdown.Item>
              <NavDropdown.Item href="/products/webite">Webite Developments</NavDropdown.Item>
              <NavDropdown.Item href="/products/snm">Social Network Marketing</NavDropdown.Item>
              <NavDropdown.Item href="/products/seo">Search Engine Optimisation(SEO)</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="technology">Technology</Nav.Link>
            <Nav.Link href="inquiry">Inquiry</Nav.Link>
            <Nav.Link href="contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavPage;
