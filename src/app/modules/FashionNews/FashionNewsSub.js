import React from "react";
import Title from "../../components/Commom/Title";
import Image from "../../components/Image/Image";
import ContentNews from "./parts/ContentNews";
import TitleNews from "./parts/TitleNews";
import { Link } from "react-router-dom";
import TitleProduct from "../Product/parts/TitleProduct";
import PriceProduct from "../Product/parts/PriceProduct";

const FashionNewsSub = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-8">
          <Title
            title="Tin Tức Mới Nhất"
            width="text-[26px] font-semibold after:w-[200px] "
          ></Title>

          <div className="flex flex-col items-center gap-y-8">
            <Link className="flex items-start gap-x-2">
              <Image className="w-[100px] h-[100px] flex-1 rounded-md overflow-hidden"></Image>
              <ContentNews className="flex-[2] text-textBold text-[18px] font-semibold multiline-ellipsis3 "></ContentNews>
            </Link>
            <Link className="flex items-start gap-x-2">
              <Image className="w-[100px] h-[100px] flex-1 rounded-md overflow-hidden"></Image>
              <ContentNews className="flex-[2] text-textBold text-[18px] font-semibold multiline-ellipsis3 "></ContentNews>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          <Title
            title="Sản Phẩm Bán Chạy"
            width="text-[26px] font-semibold after:w-[210px] "
          ></Title>
          <div className="flex flex-col items-start gap-y-8">
            <Link className="flex items-start gap-x-2">
              <Image className="w-[100px] h-[100px] flex-1 rounded-md overflow-hidden"></Image>
              <div className="flex-[2]">
                <TitleProduct className="multiline-ellipsis text-textBold font-medium text-[20px]"></TitleProduct>
                <PriceProduct className="text-[20px] font-medium"></PriceProduct>
              </div>
            </Link>
            <Link className="flex items-start gap-x-2">
              <Image className="w-[100px] h-[100px] flex-1 rounded-md overflow-hidden"></Image>
              <div className="flex-[2]">
                <TitleProduct className="multiline-ellipsis text-textBold font-medium text-[20px]"></TitleProduct>
                <PriceProduct className="text-[20px] font-medium"></PriceProduct>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionNewsSub;
