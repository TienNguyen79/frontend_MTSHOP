import React from "react";
import { formatPrice } from "../../../../utils/functions";

const PriceProduct = ({
  price = 600000,
  className = "text-[15px] font-medium",
}) => {
  return (
    <span className={`text-textBold  ${className}`}>
      {" "}
      {formatPrice(price)} đ
    </span>
  );
};

export default PriceProduct;
