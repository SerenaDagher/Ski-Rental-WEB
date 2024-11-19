import React from "react";
import RentalCard from "./RentalCard";
import "./RentalCard.css"; // Use the same CSS file for styling

function RentalGrid() {
  const cardData = [
    {
      image: "https://decathlon.com.lb/cdn/shop/products/52ed40a2ef81b7e715865d6099d17414_0d8b79e9-cef2-4270-a34a-c07906b403da.jpg?v=1699861325",
      title: "Helmet",
      description: "10$", 
    },
    
  ];

  return (
    <div className="main">
      <h1>Equipments</h1>
      <ul className="cards">
        {cardData.map((card, index) => (
          <RentalCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </ul>
    </div>
  );
}

export default RentalGrid;
