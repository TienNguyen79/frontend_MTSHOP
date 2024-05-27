import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllCategory } from "../../../../store/category/handleCategory";
import { sortByQuantityProduct } from "../../../../utils/functions";

const ListCategory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetAllCategory());
  }, [dispatch]);

  const { dataAllCategory } = useSelector((state) => state.category);

  const sortDataAllCategory = sortByQuantityProduct(
    Array.isArray(dataAllCategory?.results) ? dataAllCategory.results : [],
    true
  );

  return (
    <div className="grid grid-cols-5 gap-x-4 ">
      {sortDataAllCategory?.length > 0 &&
        sortDataAllCategory.map((category) => (
          <CategoryItem key={category.id} data={category}></CategoryItem>
        ))}
    </div>
  );
};

export default ListCategory;
