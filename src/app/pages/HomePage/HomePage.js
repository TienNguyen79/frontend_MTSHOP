import React, { Fragment, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Gap from "../../components/Commom/Gap";
import { axiosClient } from "../../axios/axiosClient";
import { useDispatch, useSelector } from "react-redux";
import { handleGetCurrentUser } from "../../../store/user/handleUser";
import { generateStars } from "../../../utils/functions";
import ProductItem from "../../modules/Product/ProductItem";
import ProductDetails from "../../modules/Product/ProductDetails";
import ProductModal from "../../modules/Product/ProductModal";
import SliderBanner from "../../modules/HomePage/SliderBanner";
import PolicyFeature from "../../modules/PolicyFeature/PolicyFeature";
import Title from "../../components/Commom/Title";
import LabelRedirect from "../../components/Label/LabelRedirect";
import FlexRow from "../../components/Commom/FlexRow";
import ListCategory from "../../modules/HomePage/Categories/ListCategory";
import ImgFeature from "../../modules/HomePage/ImgFeature/ImgFeature";
import BrandFashion from "../../modules/HomePage/BrandFashion/BrandFashion";
import FashionNews from "../../modules/FashionNews/FashionNews";
import {
  handleGetNewArrivals,
  handleGetTopSoldProduct,
} from "../../../store/product/handleProduct";
const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetTopSoldProduct());
    dispatch(handleGetNewArrivals());
  }, [dispatch]);

  const dataTopSoldProduct = useSelector(
    (state) => state.product.dataTopSoldProduct.results
  );
  const dataNewArrivalProduct = useSelector(
    (state) => state.product.dataNewArrivals.results
  );
  return (
    <div>
      <SliderBanner></SliderBanner>

      <Gap>
        <PolicyFeature></PolicyFeature>
      </Gap>

      <ImgFeature></ImgFeature>

      <Gap>
        <div className="mt-[60px]">
          <FlexRow>
            <Title title="Danh Mục Hàng Đầu"></Title>
          </FlexRow>
          <ListCategory></ListCategory>
        </div>

        <div className="mt-[60px]">
          <FlexRow>
            <Title title="Sản Phẩm Bán Chạy"></Title>
            <LabelRedirect title="Xem thêm" />
          </FlexRow>
          <div className="grid grid-cols-4 gap-x-5 gap-y-10">
            {dataTopSoldProduct?.length > 0 &&
              dataTopSoldProduct.map((product) => (
                <ProductItem key={product.id} data={product}></ProductItem>
              ))}
          </div>
        </div>

        <div className="mt-[60px]">
          <FlexRow>
            <Title title="Sản Phẩm Mới Ra"></Title>
          </FlexRow>
          <div className="grid grid-cols-4 gap-x-5 gap-y-10">
            {dataNewArrivalProduct?.length > 0 &&
              dataNewArrivalProduct.map((product) => (
                <ProductItem key={product.id} data={product}></ProductItem>
              ))}
          </div>
        </div>

        <div className="mt-[60px]">
          <FlexRow>
            <Title title="Tin Tức Thời Trang"></Title>
          </FlexRow>
          <FashionNews></FashionNews>
        </div>
      </Gap>

      {/* <Gap>
        <div className="mt-10">
          <ProductDetails></ProductDetails>
        </div>
      </Gap>

      <Gap>
        <Button className="py-3 px-4 rounded-md   " kind="primary">
          Mua hàng 2
        </Button>
      </Gap> */}
    </div>
  );
};

export default HomePage;
