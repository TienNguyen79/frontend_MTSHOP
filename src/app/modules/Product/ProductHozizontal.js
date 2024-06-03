import React from "react";
import Image from "../../components/Image/Image";
import TitleProduct from "./parts/TitleProduct";
import PriceProduct from "./parts/PriceProduct";

const ProductHozizontal = () => {
  return (
    <div className="flex items-center justify-between gap-x-2">
      <div className="flex items-center  gap-x-2">
        <div className="flex-1">
          <Image className="w-[80px] h-[80px] rounded-md overflow-hidden "></Image>
        </div>
        <TitleProduct className="multiline-ellipsis flex-[3] max-w-[220px]  text-textBold font-normal text-[18px]"></TitleProduct>
      </div>
      <PriceProduct></PriceProduct>
    </div>
  );
};

export default ProductHozizontal;
