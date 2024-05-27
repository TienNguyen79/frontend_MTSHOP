import React, { Fragment, useState } from "react";
import TitleProduct from "./parts/TitleProduct";
import PriceProduct from "./parts/PriceProduct";
import PriceRootProduct from "./parts/PriceRootProduct";
import { generateStars } from "../../../utils/functions";
import StarProduct from "./parts/StarProduct";
import DiscountProduct from "./parts/DiscountProduct";
import LabelRedirect from "../../components/Label/LabelRedirect";
import Title from "../../components/Commom/Title";
import ImageUpload from "../../components/Image/ImageUpload";
import Image from "../../components/Image/Image";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Epath } from "../../routes/routerConfig";
import ProductModal from "./ProductModal";

const ProductItem = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Fragment>
      <Link className="hover:scale-110 max-w-[380px]  transition-all hover:border-primary hover:border hover:rounded-lg">
        <div className="max-w-[380px] h-[480px] shadow-custom2 py-1 px-2 rounded-lg">
          <div className="flex flex-col gap-y-3 cursor-pointer relative ">
            <div className="overflow-hidden">
              <Image
                url="https://topcomshop.com/uploads/.thumbs/images/a-athudong/9/11955385302-104616149.jpg"
                className=" h-[350px]  rounded-xl  overflow-hidden"
              ></Image>
            </div>
            <div className="p-2">
              <div className="flex items-center">
                <TitleProduct className="multiline-ellipsis">
                  Áo Thun Nam Tay Ngắn Coffee Lovers Trơn Form Fitted -
                  10S24TSS009
                </TitleProduct>

                <span
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("okok");
                    setOpenModal(true);
                  }}
                >
                  <ShoppingBag color="#70c1b3" />
                </span>
              </div>
              <div className="flex items-center gap-x-3 mb-[2px]">
                <PriceProduct
                  className="text-[18px] font-semibold mt-1"
                  price={55000000}
                ></PriceProduct>
                <PriceRootProduct price={999000}></PriceRootProduct>
              </div>
              <StarProduct></StarProduct>
            </div>
            <div className="absolute top-2 left-0">
              <DiscountProduct discount={99}></DiscountProduct>
            </div>
          </div>
        </div>
      </Link>
      <ProductModal open={openModal} setOpen={setOpenModal}></ProductModal>
    </Fragment>
  );
};

export default ProductItem;
