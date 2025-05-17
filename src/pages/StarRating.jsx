import { useState } from 'react';
import '../styles/StarRating.css';

function StarRating({ rating, isInteractive = false, onChange, style = {} }) {
  const [hoverRating, setHoverRating] = useState(0);
  
  const handleMouseEnter = (index) => {
    if (isInteractive) {
      setHoverRating(index + 1);
    }
  };

  const handleMouseLeave = () => {
    if (isInteractive) {
      setHoverRating(0);
    }
  };

  const handleClick = (index) => {
    if (isInteractive && onChange) {
      onChange(index + 1);
    }
  };

  const displayRating = hoverRating || rating;
  const fullStars = Math.floor(displayRating);
  const halfStar = displayRating % 1 >= 0.5;
  
  return (
    <div 
      className={`star-rating ${isInteractive ? 'interactive' : ''}`}
      style={style}
    >
      {[...Array(5)].map((_, index) => (
        <span 
          key={index} 
          className={
            index < fullStars 
              ? "star full" 
              : (index === fullStars && halfStar) 
                ? "star half" 
                : "star empty"
          }
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >★</span>
      ))}
    </div>
  );
}

export default StarRating;