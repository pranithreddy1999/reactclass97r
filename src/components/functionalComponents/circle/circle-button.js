


import React, { useState } from 'react';
import './circle.css'; // You can create a CSS file for styling

const CircleButton = () => {
  const [circles, setCircles] = useState([]);

  const addCircle = () => {
    const newCircles = [...circles];
    newCircles.push(0);
    setCircles(newCircles);
  };

  const incrementCircle = (index) => {
    const newCircles = [...circles];
    newCircles[index]++;
    setCircles(newCircles);
  };

  return (
    <div>
      <button onClick={addCircle}>Add Circle</button>
      <div className="circle-container">
        {circles.map((count, index) => (
          <div
            key={index}
            className="circle"
            onClick={() => incrementCircle(index)}
          >
            {count}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleButton;

