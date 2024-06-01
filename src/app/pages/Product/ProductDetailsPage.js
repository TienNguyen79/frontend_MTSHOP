import React, { useCallback, useEffect, useState } from "react";
import Gap from "../../components/Commom/Gap";
import ProductDetails from "../../modules/Product/ProductDetails";
import Tabs from "../../components/Tabs/Tabs";
import PolicyService from "../../modules/Product/partsDetails/PolicyService";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetDetailsProduct,
  handleSuggestProduct,
} from "../../../store/product/handleProduct";
import { useLocation, useParams } from "react-router-dom";
import Title from "../../components/Commom/Title";
import ProductItem from "../../modules/Product/ProductItem";
import { getVariablesLC, saveVariablesLC } from "../../../utils/localStorage";
import useLocationChange from "../../../utils/functions";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const [activeTabs, setActiveTabs] = useState(1);
  const handleSelecTabs = (id) => {
    setActiveTabs(id);
  };

  const { id } = useParams();

  useEffect(() => {
    dispatch(handleSuggestProduct(id));
  }, [dispatch, id]);

  const dataSuggest = useSelector((state) => state.product.dataAllProduct);

  const data = useSelector((state) => state.product.dataDetailsProduct);

  // // Callback to save tabsProDetails as 1 when navigating away from this page
  // const handleSaveTabOnExit = useCallback(() => {
  //   saveVariablesLC("tabsProDetails", 1);
  // }, []);

  // // Use the custom hook to detect location changes
  // useLocationChange(handleSaveTabOnExit);

  return (
    <div>
      <Gap>
        <div>
          <ProductDetails />
        </div>
      </Gap>

      <div className="flex items-center justify-center ">
        <Tabs
          title1="Mô Tả Sản Phẩm"
          title2="Chính sách và dịch vụ khách hàng "
          title3="Đánh Giá Của Khách Hàng "
          onChange={handleSelecTabs}
          activeTabs={activeTabs}
          className="border-b-[1px] border-text3"
        ></Tabs>
      </div>

      <Gap>
        <>
          {activeTabs === 1 && <div>{data?.description}</div>}
          {activeTabs === 2 && <PolicyService></PolicyService>}
          {activeTabs === 3 && <h1>Đánh Giá Của Khách Hàng</h1>}
        </>
      </Gap>
      <div>
        <div className="flex items-center justify-center mt-10">
          <Title title="Có Thể Bạn Cũng Thích" width="after:w-[255px]"></Title>
        </div>

        <Gap>
          <div className="grid grid-cols-4 gap-x-4">
            {dataSuggest.length > 0 &&
              dataSuggest.map((product) => (
                <ProductItem data={product} key={product?.id}></ProductItem>
              ))}
          </div>
        </Gap>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
