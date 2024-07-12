// src/BackgroundColorChanger.js
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const BackgroundColorChanger = () => {
  const [color, setColor] = useState('#87CEEB'); // Initial color set to sky blue

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  return (
    <div style={{ backgroundColor: color, height: '100vh', padding: '20px' }}>
      <h1>Background Color Changer</h1>
      <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
    </div>
  );
};

export default BackgroundColorChanger;
