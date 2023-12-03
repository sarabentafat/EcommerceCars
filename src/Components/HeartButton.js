// HeartButton.js
import React, { useState } from 'react';

const HeartButton = ({ className }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      onClick={handleClick}
      className={`heart-button ${isLiked ? 'liked' : ''} ${className}`}
    >
      <svg
        className="w-4 h-4"
        fill={isLiked ? '#BA790B' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        ></path>
      </svg>
    </button>
  );
};

export default HeartButton;
