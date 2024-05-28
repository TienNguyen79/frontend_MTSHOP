import React from "react";
import AttributeInCart from "../Product/parts/AttributeInCart";
import Image from "../../components/Image/Image";
import TitleProduct from "../Product/parts/TitleProduct";
import ProHandleQuantityInCart from "./parts/ProHandleQuantityInCart";
import PriceProduct from "../Product/parts/PriceProduct";
import { useForm } from "react-hook-form";
import { Trash2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../utils/functions";

const CartPreviewItem = ({ data }) => {
  const { control } = useForm();

  const handleQuantityChange = (id, newQuantity) => {
    console.log(`ProductDetails ID: ${id}, New Quantity: ${newQuantity}`);
    // Thực hiện các xử lý khác ở đây, ví dụ: cập nhật trạng thái giỏ hàng
  };
  return (
    <div className=" border-b-2 border-text2 py-2">
      <div className="flex gap-x-3 items-start">
        <div className="flex items-center gap-x-3 flex-[6]">
          <Link>
            <Image
              url={data?.product?.image?.url}
              className="w-[90px] h-[120px] rounded-lg overflow-hidden"
            ></Image>
          </Link>

          <div className="flex flex-col gap-y-2">
            <Link>
              <TitleProduct className="font-medium text-[18px] limitText max-w-[190px] hover:text-primary transition-all">
                {data?.product?.name}
              </TitleProduct>
            </Link>
            <div className="flex items-center gap-x-3">
              {data?.productDetails?.properties?.size && (
                <AttributeInCart className="uppercase">
                  SIZE: {data?.productDetails?.properties?.size?.description}{" "}
                </AttributeInCart>
              )}

              {data?.productDetails?.properties?.color && (
                <AttributeInCart className="uppercase">
                  MÀU: {data?.productDetails?.properties?.color?.description}{" "}
                </AttributeInCart>
              )}
            </div>

            <ProHandleQuantityInCart
              control={control}
              name="quantity"
              className="w-[100px] p-[6px]"
              quantity={data?.quantity}
              id={data?.productDetails?.id}
              onQuantityChange={handleQuantityChange}
            ></ProHandleQuantityInCart>

            <PriceProduct
              price={data?.product?.total}
              className="text-[20px] font-semibold"
            ></PriceProduct>
          </div>
        </div>

        <span className="mt-[4px]  cursor-pointer flex-1 hover:text-error transition-all">
          <Trash2 size={"18px"} />
        </span>
      </div>
    </div>
  );
};

export default CartPreviewItem;
