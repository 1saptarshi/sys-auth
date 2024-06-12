import React from 'react';

const ThreeDHoverEffect = ({ children }) => {
  return (
    <div className="transform hover:scale-105 transition-transform duration-300">
      {children}
    </div>
  );
};

export default ThreeDHoverEffect;
