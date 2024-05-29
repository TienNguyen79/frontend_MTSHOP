import React, { useState } from "react";
import Gap from "../../components/Commom/Gap";
import ProductDetails from "../../modules/Product/ProductDetails";
import Tabs from "../../components/Tabs/Tabs";

const ProductDetailsPage = () => {
  const [activeTabs, setActiveTabs] = useState(1);
  const handleSelecTabs = (id) => {
    setActiveTabs(id);
  };
  return (
    <Gap>
      <div>
        <ProductDetails />
        <Tabs
          title1="Mô Tả Sản Phẩm"
          title2="Chính sách và dịch vụ khách hàng "
          title3="Đánh Giá Của Khách Hàng "
          onChange={handleSelecTabs}
          activeTabs={activeTabs}
        ></Tabs>

        <>
          {activeTabs === 1 && <h1>Tab1</h1>}
          {activeTabs === 2 && <h1>Tab2</h1>}
          {activeTabs === 3 && <h1>Tab3</h1>}
        </>
      </div>
    </Gap>
  );
};

export default ProductDetailsPage;
