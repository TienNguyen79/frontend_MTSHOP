import React, { useEffect, useState } from "react";
import Image from "../../components/Image/Image";
import Slider from "react-slick";
import { ChevronLeft } from "lucide-react";
import TitleProduct from "./parts/TitleProduct";
import PriceProduct from "./parts/PriceProduct";
import PriceRootProduct from "./parts/PriceRootProduct";
import DiscountProduct from "./parts/DiscountProduct";
import AttributeProduct from "./parts/AttributeProduct";
import ProHandleQuantity from "./parts/ProHandleQuantity";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import StarProduct from "./parts/StarProduct";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetDetailsProduct,
  handleGetQuantityProduct,
} from "../../../store/product/handleProduct";
import { getVariablesLC } from "../../../utils/localStorage";
import { toast } from "react-toastify";
import { handleAddtoCart } from "../../../store/cart/handleCart";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { control, handleSubmit, setValue } = useForm();
  const getIdProductModalfromLC = getVariablesLC("idProductModal");
  const [imgSelected, setImgSelected] = useState(0);
  const [colorSelected, setColorSelected] = useState(null);
  const [sizeSelected, setSizeSelected] = useState(null);

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
  };

  const { id } = useParams();

  useEffect(() => {
    dispatch(
      handleGetQuantityProduct({
        id: id || getIdProductModalfromLC,
        sizeId: sizeSelected,
        colorId: colorSelected,
      })
    );
  }, [colorSelected, dispatch, getIdProductModalfromLC, id, sizeSelected]);

  useEffect(() => {
    dispatch(handleGetDetailsProduct(id || getIdProductModalfromLC));
  }, [dispatch, getIdProductModalfromLC, id]);

  const data = useSelector((state) => state.product.dataDetailsProduct);
  const quantityProduct = useSelector(
    (state) => state.product.dataQuantityProduct
  );
  const { loading } = useSelector((state) => state.cart);

  const ArrUniqueColorLength =
    data?.productVariantUnique?.ArrUniqueColor.length;
  const ArrUniqueSizeLength = data?.productVariantUnique?.ArrUniqueSize.length;

  const handleAddToCartForm = (results) => {
    if (ArrUniqueColorLength > 0 && ArrUniqueSizeLength > 0) {
      if (!sizeSelected) {
        return toast.error("Vui Lòng Chọn Size", { autoClose: 800 });
      }

      if (!colorSelected) {
        return toast.error("Vui Lòng Chọn Màu Sắc", { autoClose: 800 });
      }
    } else if (ArrUniqueColorLength > 0 && ArrUniqueSizeLength < 0) {
      if (!colorSelected) {
        return toast.error("Vui Lòng Chọn Màu Sắc", { autoClose: 800 });
      }
    } else if (ArrUniqueSizeLength > 0 && ArrUniqueColorLength < 0) {
      if (!sizeSelected) {
        return toast.error("Vui Lòng Chọn Size", { autoClose: 800 });
      }
    }

    dispatch(
      handleAddtoCart({
        quantity: results.quantity,
        productDetailsId: quantityProduct?.id,
        callBack: () => {
          setValue("quantity", 1);
          setColorSelected(null);
          setSizeSelected(null);
        },
      })
    );
  };

  const handleColorSelect = (colorId) => {
    setColorSelected(colorId);
    setSizeSelected(null); // để khi bị point-event-none thì ấn vào color để hủy size , để chọn size khác
  };

  const handleSizeSelect = (sizeId) => {
    setSizeSelected(sizeId);
  };

  const availableSizes = data?.productVariantUnique?.ArrUniqueSize.map(
    (size) => {
      // trả ra boolean
      const available = data?.productVariantUnique?.ArrUniqueColor.filter(
        (color) => color.id === colorSelected
      )[0]?.availableSizes.some((s) => s.id === size.id && s.available);
      return { ...size, available };
    }
  );

  const availableColors = data?.productVariantUnique?.ArrUniqueColor.map(
    (color) => {
      // trả ra boolean
      const available = data?.productVariantUnique?.ArrUniqueSize.filter(
        (size) => size.id === sizeSelected
      )[0]?.availableColors.some((c) => c.id === color.id && c.available);
      return { ...color, available };
    }
  );

  useEffect(() => {
    setImgSelected(0);
    setSizeSelected(null);
    setColorSelected(null);
  }, [location]);

  return (
    <form onSubmit={handleSubmit(handleAddToCartForm)}>
      <div className="grid grid-cols-2 gap-x-10">
        <div className="flex flex-col gap-y-5">
          <Image
            url={data?.image?.length > 0 && data?.image[imgSelected]?.url}
            className="w-full max-h-[600px] h-[100%] rounded-md overflow-hidden"
          ></Image>

          {data?.image?.length > 4 ? (
            <div className="productDetails slider-container">
              <Slider {...settings}>
                {data?.image?.length > 0 &&
                  data.image.map((img, index) => (
                    <div key={img.id} onClick={() => setImgSelected(index)}>
                      <Image
                        url={img?.url}
                        className={`Imgthumb ${
                          imgSelected === index ? "activeImageThumb" : ""
                        } w-full h-[100px] px-2 cursor-pointer`}
                      ></Image>
                    </div>
                  ))}
              </Slider>
            </div>
          ) : (
            <div className="flex items-center">
              {data?.image?.length > 0 &&
                data.image.map((img, index) => (
                  <div key={img.id} onClick={() => setImgSelected(index)}>
                    <Image
                      url={img?.url}
                      className="Imgthumb w-full h-[100px] px-2"
                    ></Image>
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-y-5">
          <TitleProduct className="text-textBold text-[20px] font-medium capitalize">
            {data?.name}
          </TitleProduct>
          <div className="flex items-center gap-x-3">
            {data?.averageRating > 0 && (
              <StarProduct averageRating={data?.averageRating}></StarProduct>
            )}

            {data?.sold > 0 && (
              <h1 className="text-text3 text-[14px] font-normal">
                {data?.sold} Đã Bán
              </h1>
            )}
          </div>

          <div className="flex items-center gap-x-3 mb-[2px]">
            <PriceProduct
              className="text-[24px] font-semibold mt-1"
              price={data?.total}
            ></PriceProduct>
            <PriceRootProduct
              className="text-[20px]"
              price={data?.price}
            ></PriceRootProduct>

            <DiscountProduct discount={data?.discount}></DiscountProduct>
          </div>

          <div className="flex flex-col gap-y-4">
            {availableColors?.length > 0 && (
              <div className="flex flex-col gap-y-4">
                <h1 className="text-textBold text-[14px] font-normal">
                  Chọn màu sắc
                </h1>
                <div className="grid grid-cols-3 gap-4">
                  {availableColors.map((color) => (
                    <div
                      key={color.id}
                      onClick={() => handleColorSelect(color.id)}
                      className={`${
                        sizeSelected && !color.available
                          ? "opacity-30 pointer-events-none  "
                          : ""
                      }`}
                    >
                      <AttributeProduct
                        title={color.description}
                        className={`cursor-pointer ${
                          colorSelected === color.id
                            ? "border-[2px] !border-primary scale-105"
                            : ""
                        } `}
                        disabled={!color.available}
                      ></AttributeProduct>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {availableSizes?.length > 0 && (
              <div className="flex flex-col gap-y-4">
                <h1 className="text-textBold text-[14px] font-normal">
                  Chọn size
                </h1>

                <div className="grid grid-cols-6 gap-4">
                  {availableSizes.map((size) => (
                    <div
                      key={size.id}
                      onClick={() => handleSizeSelect(size.id)}
                      className={`${
                        colorSelected && !size.available
                          ? "opacity-30 pointer-events-none  "
                          : ""
                      }`}
                    >
                      <AttributeProduct
                        className={`max-w-[80px] uppercase cursor-pointer ${
                          sizeSelected === size.id
                            ? "border-[2px] !border-primary scale-105"
                            : ""
                        } `}
                        title={size.description}
                        disabled={!size.available}
                      ></AttributeProduct>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex flex-col gap-y-4">
              <h1 className="text-textBold text-[14px] font-normal">
                Chọn số lượng
              </h1>
              <div className="flex items-center gap-x-3">
                <ProHandleQuantity
                  control={control}
                  name="quantity"
                ></ProHandleQuantity>
                <h1 className="text-text3 text-[12px] font-normal">
                  {quantityProduct?.quantity || 0} sản phẩm có sẵn
                </h1>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-x-4 py-5">
            <Button
              type="submit"
              kind="secondary"
              className="py-3 px-4 rounded-[4px] min-w-[192px]"
              isLoading={loading}
            >
              Thêm vào Giỏ hàng
            </Button>
            <Button kind="primary" className="py-3 px-4  rounded-[4px]">
              Mua Ngay
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductDetails;
