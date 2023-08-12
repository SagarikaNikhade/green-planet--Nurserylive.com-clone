import React from 'react';

const ProductRating = ({ rating }) => {
  // Assuming rating is between 0 and 5
  const maxRating = 5;
  const starElements = [];

  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      // Render a filled star
      starElements.push(<span key={i} className="filled-star" style={{color:"gold",fontSize:"20px"}}>★</span>);
    } else {
      // Render an empty star
      starElements.push(<span key={i} className="empty-star" style={{fontSize:"20px"}}>☆</span>);
    }
  }

  return <div className="product-rating">{starElements}</div>;
};

export default ProductRating;
