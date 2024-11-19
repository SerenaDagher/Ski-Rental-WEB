import React from "react";
import "./RentalCard.css"; 

function RentalCard({
  image,
  title
}) {
  return (
    <div className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src={image} alt={title} />
        </div>
        <div className="card_content">
          <h2 className="card_title">{title}</h2>
          <button className="rent-now-btn">Rent Now</button> 
        </div>
      </div>
    </div>
  );
}

export default RentalCard;

