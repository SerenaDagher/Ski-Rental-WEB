import React from 'react';
import { Dropdown } from 'react-bootstrap'; 

const MyDropdown = ({ buttonLabel, items }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {buttonLabel}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item, index) => (
          <Dropdown.Item key={index} href={item.link}>
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MyDropdown;

