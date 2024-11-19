import React from "react";
import "./RentalCard.css"; // Ensure this file contains your CSS code

function RentalCard({ image, title, description }) {
  return (
    <div className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src={image} alt={title} />
        </div>
        <div className="card_content">
          <h2 className="card_title">{title}</h2>
          <p className="card_text">{description}</p>
          <button className="rent-now-btn">Rent Now</button> {/* Blue Rent Now button */}
        </div>
      </div>
    </div>
  );
}

export default RentalCard;
