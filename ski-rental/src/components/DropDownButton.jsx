import React from 'react';
import { Dropdown } from 'react-bootstrap';

const MyDropdown = ({ buttonLabel, items }) => {
  const purpleColor = "#3339b5";  // Replace with your actual purple color

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="outline-secondary"
        id="dropdown-basic"
        style={{
          borderColor: purpleColor,  // Set the border color to purple
          color: purpleColor,  // Set the text color to purple
          fontWeight: 'bold',  // Make the button label bold
          padding: '5px 10px',  // Adjust padding for better appearance
        }}
      >
        {buttonLabel}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item, index) => (
          <Dropdown.Item
            key={index}
            onClick={item.action}
            className="custom-dropdown-item"  // Custom class for styling
          >
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MyDropdown;
