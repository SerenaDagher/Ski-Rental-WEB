// src/components/HomePage.js

import React from "react";
import { Carousel, Navbar, Nav, Container } from "react-bootstrap";
import "../App.css"; // Ensure App.css is imported

function HomePage() {
  return (
    <div className="homepage-fullscreen">
      {/* Top Navigation Bar */}
      <Navbar style={{ backgroundColor: "#145969" }} variant="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/" className="text-white">
            Ski Rentals
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <a href="/" className="nav-link text-white">Home</a>
              <a href="/create-rental" className="nav-link text-white">Create Rental</a>
              <a href="/rental-list" className="nav-link text-white">Rental List</a>
              <a href="/about" className="nav-link text-white">About Us</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page Title */}
      <Container fluid className="text-center my-4">
        <h1>Welcome to Our Ski Rental Service</h1>
        <p>Your one-stop shop for all ski rental needs!</p>
      </Container>

      {/* Carousel Section */}
      {/* <Container fluid>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=High+Quality+Skis"
              alt="High Quality Skis"
            />
            <Carousel.Caption>
              <h3>High Quality Skis</h3>
              <p>Perfect for all levels, from beginners to experts.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Affordable+Prices"
              alt="Affordable Prices"
            />
            <Carousel.Caption>
              <h3>Affordable Prices</h3>
              <p>Great rental rates to fit any budget.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Beautiful+Slopes"
              alt="Beautiful Slopes"
            />
            <Carousel.Caption>
              <h3>Beautiful Slopes</h3>
              <p>Explore stunning locations with our top gear.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container> */}
    </div>
  );
}

export default HomePage;
