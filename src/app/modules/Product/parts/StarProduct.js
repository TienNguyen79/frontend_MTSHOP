import React from "react";
import { generateStars } from "../../../../utils/functions";

const StarProduct = ({ pointRate = 3, className = "" }) => {
  return (
    <div className={`flex items-center gap-x-1 ${className} `}>
      {generateStars(pointRate)}
    </div>
  );
};

export default StarProduct;
