import React from "react";
import FashionNewsItem from "./FashionNewsItem";

const FashionNews = () => {
  return (
    <div className="grid grid-cols-3 gap-x-4">
      <FashionNewsItem></FashionNewsItem>
      <FashionNewsItem></FashionNewsItem>
      <FashionNewsItem></FashionNewsItem>
    </div>
  );
};

export default FashionNews;
