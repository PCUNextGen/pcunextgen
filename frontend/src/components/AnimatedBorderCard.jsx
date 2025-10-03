import React from 'react';

const AnimatedBorderCard = ({ children }) => {
  return (
    // This div is the container with our custom 'animated-border' class
    <div className="animated-border">
      {/* This inner div holds the actual content and has a solid background */}
      {children}
    </div>
  );
};

export default AnimatedBorderCard;