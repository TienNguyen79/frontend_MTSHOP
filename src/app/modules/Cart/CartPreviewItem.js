import React from "react";
import AttributeInCart from "../Product/parts/AttributeInCart";
import Image from "../../components/Image/Image";
import TitleProduct from "../Product/parts/TitleProduct";
import ProHandleQuantityInCart from "./parts/ProHandleQuantityInCart";
import PriceProduct from "../Product/parts/PriceProduct";
import { useForm } from "react-hook-form";
import { Trash2, X } from "lucide-react";
import { Link } from "react-router-dom";

const CartPreviewItem = () => {
  const { control } = useForm();
  return (
    <div>
      <div className="flex gap-x-3 items-start">
        <div className="flex items-center gap-x-3 flex-[6]">
          <Link>
            <Image className="w-[90px] max-h-[120px] rounded-lg overflow-hidden"></Image>
          </Link>

          <div className="flex flex-col gap-y-2">
            <Link>
              <TitleProduct className="font-medium text-[18px] limitText max-w-[190px] hover:text-primary transition-all">
                Áo dài hot nhất 2024
              </TitleProduct>
            </Link>
            <div className="flex items-center gap-x-3">
              <AttributeInCart>SIZE: XL</AttributeInCart>
              <AttributeInCart>MÀU: XANH</AttributeInCart>
            </div>

            <ProHandleQuantityInCart
              control={control}
              name="quantity"
              className="w-[100px] p-[6px]"
            ></ProHandleQuantityInCart>

            <PriceProduct
              price={600000}
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
