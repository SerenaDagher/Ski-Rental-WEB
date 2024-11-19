import React, { useEffect, useState } from 'react';

const SkisList = () => {
  const [skis, setSkis] = useState([]);

  useEffect(() => {
    const fetchSkis = async () => {
      try {
        const response = await fetch('http://localhost:8082/api/skis');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSkis(data);
      } catch (error) {
        console.error('Error fetching skis:', error);
      }
    };

    fetchSkis();
  }, []);

  return (
    <div>
      <h1>Available Skis</h1>
      <ul>
        {skis.map(ski => (
          <li key={ski._id}>
            {ski.name} - {ski.brand} ({ski.type})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkisList;
