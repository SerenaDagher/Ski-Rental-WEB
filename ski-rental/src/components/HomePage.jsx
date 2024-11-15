// src/components/HomePage.js

import React from "react";
import { Carousel, Navbar, Nav, Container } from "react-bootstrap";
import "../App.css"; // Ensure App.css is imported
import RentalList from "./RentalList";
import TopBar from "./TopBar"; // Import TopBar

function HomePage() {
  return (
    <div className="homepage-fullscreen">
      {/* Top Navigation Bar */}
      <TopBar />
      {/* Main Content of Home Page */}
      <div style={{ padding: "20px" }}>
        <h1>Welcome to Our Ski Rental Service</h1>
        <p>Wait less and Ski more!</p>
        <RentalList />
        
        {/* Other content can go here */}
      </div>

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
