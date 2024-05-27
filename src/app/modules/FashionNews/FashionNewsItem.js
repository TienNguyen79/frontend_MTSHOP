import React from "react";
import Image from "../../components/Image/Image";
import CategoryNews from "./parts/CategoryNews";
import DateCreateNews from "./parts/DateCreateNews";
import TitleNews from "./parts/TitleNews";
import ContentNews from "./parts/ContentNews";

const FashionNewsItem = () => {
  return (
    <div className="flex flex-col gap-y-2 ">
      <div className="overflow-hidden">
        <Image className="rounded-md overflow-hidden hover:scale-125  transition-all cursor-pointer"></Image>
      </div>
      <div className="flex flex-col gap-y-2 py-3 px-2">
        <div className="flex flex-col  gap-y-2">
          <CategoryNews className="max-w-[330px]"></CategoryNews>
          <DateCreateNews></DateCreateNews>
        </div>
        <TitleNews className="max-w-[320px]" to="/ds"></TitleNews>
        <ContentNews></ContentNews>
      </div>
    </div>
  );
};

export default FashionNewsItem;
