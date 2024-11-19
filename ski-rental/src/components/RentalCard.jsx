import React from "react";
import "./RentalCard.css";

function RentalCard({ image, title, available, onRentClick }) {
  return (
    <div className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src={image} alt={title} />
        </div>
        <div className="card_content">
          <h2 className="card_title">{title}</h2>
          {available ? (
            <button 
              className="rent-now-btn" 
              onClick={onRentClick} // Trigger the dialog when clicked
            >
              Rent Now
            </button>
          ) : (
            <p className="not-available">Not Available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RentalCard;
