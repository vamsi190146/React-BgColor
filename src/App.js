import React from 'react';
import './App.css'; // Import your CSS file
import ColorPicker from './ColorPicker'; // Correct import path

const App = () => {
  return (
    <div className="container">
      <h1>Dynamic Background Color Changer</h1>
      <div className="color-picker">
        <ColorPicker />
      </div>
    </div>
  );
};

export default App;
