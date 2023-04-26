import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
  const arr=[2,3,5,8]
const ratingChanged = (newRating) => {
    newRating.map((el)=>{
        console.log(el);
    })
};
 
render(
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,
 
  document.getElementById("where-to-render")
);

export default ratingChanged;