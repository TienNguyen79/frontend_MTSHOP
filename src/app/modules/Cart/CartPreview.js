import { Drawer } from "antd";
import React, { useState } from "react";
import CartPreviewItem from "./CartPreviewItem";
import { useForm } from "react-hook-form";
import ProHandleQuantityInCart from "./parts/ProHandleQuantityInCart";
import { ShoppingBag } from "lucide-react";
import PriceProduct from "../Product/parts/PriceProduct";
import Button from "../../components/Button/Button";

const CartPreview = ({ openCartPreview, setOpenCartPreview }) => {
  const onClose = () => {
    setOpenCartPreview(false);
  };

  return (
    <div>
      <Drawer
        className="CartPreview "
        title={
          <div className="flex items-center gap-x-3">
            <ShoppingBag size={"22px"} /> <p>Giỏ Hàng Của Tôi (5)</p>
          </div>
        }
        onClose={onClose}
        open={openCartPreview}
        width={400}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-col gap-y-3 max-h-[500px] overflow-y-auto flex-grow ">
            <CartPreviewItem />
            {/* <CartPreviewItem />
            <CartPreviewItem />
            <CartPreviewItem /> */}
          </div>
          <div className="foot flex flex-col gap-y-3 mt-10  border-t-[1px] border-primary py-3 px-2 ">
            <div className="flex items-center justify-between">
              <h1 className="text-text1 text-[18px] font-medium">Tổng Tiền:</h1>
              <PriceProduct
                price={600000}
                className="text-[20px] font-semibold"
              ></PriceProduct>
            </div>
            <div className="flex items-center gap-x-4">
              <Button className="py-3 px-4 rounded-md" kind="secondary">
                Xem Giỏ Hàng
              </Button>

              <Button className="py-3 px-4 rounded-md" kind="primary">
                Thanh Toán
              </Button>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default CartPreview;
