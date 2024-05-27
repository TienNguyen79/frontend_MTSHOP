import React from "react";
import CategoryItem from "./CategoryItem";

const ListCategory = () => {
  return (
    <div className="grid grid-cols-5 gap-x-4 ">
      <CategoryItem></CategoryItem>
      <CategoryItem></CategoryItem>
      <CategoryItem></CategoryItem>
      <CategoryItem></CategoryItem>
      <CategoryItem></CategoryItem>
    </div>
  );
};

export default ListCategory;
