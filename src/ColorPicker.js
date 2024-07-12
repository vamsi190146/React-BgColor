// src/ColorPicker.js
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = () => {
  const [color, setColor] = useState('#ffffff'); // Initial color set to white

  const handleChangeComplete = (newColor) => {
    setColor(newColor.hex);
    document.body.style.backgroundColor = newColor.hex; // Change background color of body
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
    </div>
  );
};

export default ColorPicker;
