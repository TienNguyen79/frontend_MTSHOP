import React, { useState } from "react";
import Image from "../../components/Image/Image";
import Slider from "react-slick";
import { ArrowBigDown, ChevronLeft } from "lucide-react";
import TitleProduct from "./parts/TitleProduct";
import PriceProduct from "./parts/PriceProduct";
import PriceRootProduct from "./parts/PriceRootProduct";
import DiscountProduct from "./parts/DiscountProduct";
import AttributeProduct from "./parts/AttributeProduct";
import ProHandleQuantity from "./parts/ProHandleQuantity";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";

const data = {
  id: 1,
  name: "cimentarius",
  categoryId: 4,
  description:
    "Textus acer animadverto absens. Infit conturbo ut tego thalassinus hic adficio. Decipio usus corroboro demum soluta corroboro curo omnis approbo benevolentia.",
  price: "780000.000",
  discount: 84,
  total: "124800.000",
  sold: 94,
  averageRating: 4,
  createdAt: "2024-05-15T15:34:15.000Z",
  updatedAt: "2024-05-15T15:34:15.000Z",
  deletedAt: null,
  ProductDetails: [
    {
      id: 1,
      productId: 1,
      properties: {
        size: {
          id: 1,
          description: "s",
        },
        color: {
          id: 6,
          description: "Màu Đen",
        },
      },
      quantity: 80,
      createdAt: "2024-05-13T15:31:40.000Z",
      updatedAt: "2024-05-14T16:43:14.000Z",
    },
    {
      id: 2,
      productId: 1,
      properties: {
        size: {
          id: 2,
          description: "xs",
        },
        color: {
          id: 6,
          description: "Màu Đen",
        },
      },
      quantity: 95,
      createdAt: "2024-05-13T15:31:40.000Z",
      updatedAt: "2024-05-19T09:39:09.000Z",
    },
    {
      id: 4,
      productId: 1,
      properties: {
        size: {
          id: 3,
          description: "m",
        },
        color: {
          id: 5,
          description: "Màu Xanh",
        },
      },
      quantity: 545,
      createdAt: "2024-05-13T15:31:40.000Z",
      updatedAt: "2024-05-19T09:39:09.000Z",
    },
  ],
  image: [
    {
      id: 1,
      default: true,
      url: "https://picsum.photos/seed/shSYVYhs/640/480",
      productId: 1,
      createdAt: "2024-05-26T03:44:12.000Z",
      updatedAt: "2024-05-26T03:44:12.000Z",
    },
    {
      id: 2,
      default: false,
      url: "https://picsum.photos/seed/x4knKjZEv/640/480",
      productId: 1,
      createdAt: "2024-05-26T03:44:12.000Z",
      updatedAt: "2024-05-26T03:44:12.000Z",
    },
    {
      id: 3,
      default: false,
      url: "https://picsum.photos/seed/dEiivow/640/480",
      productId: 1,
      createdAt: "2024-05-26T03:44:12.000Z",
      updatedAt: "2024-05-26T03:44:12.000Z",
    },
    {
      id: 4,
      default: false,
      url: "https://picsum.photos/seed/mKr0gjILV/640/480",
      productId: 1,
      createdAt: "2024-05-26T03:44:12.000Z",
      updatedAt: "2024-05-26T03:44:12.000Z",
    },
    {
      id: 5,
      default: false,
      url: "https://picsum.photos/seed/z4KUFcavo/640/480",
      productId: 1,
      createdAt: "2024-05-26T03:44:12.000Z",
      updatedAt: "2024-05-26T03:44:12.000Z",
    },
    {
      id: 6,
      default: false,
      url: "https://loremflickr.com/640/480?lock=2031736347164672",
      productId: 1,
      createdAt: "2024-05-26T03:44:12.000Z",
      updatedAt: "2024-05-26T03:44:12.000Z",
    },
  ],
  Ratings: [
    {
      id: 3,
      userId: 7,
      productId: 1,
      orderId: 9,
      description:
        "Comburo cimentarius arcesso sono clementia conculco amplexus. Comptus sursum ante colo bardus ago benevolentia templum tergum. Uxor cum aestivus modi placeat tripudio quidem cunae.\nSurgo alius communis somniculosus. Cenaculum communis auctus audentia ait. Appositus civitas arbor vester.\nVespillo bis virga caries illum confugo stipes. Quas aliqua deduco suggero certus dens casus. Despecto totus decor aiunt fuga compello crapula nostrum benevolentia.",
      rate: "3",
      createdAt: "2024-05-15T15:21:51.000Z",
      updatedAt: "2024-05-15T15:21:51.000Z",
    },
    {
      id: 43,
      userId: 3,
      productId: 1,
      orderId: 4,
      description:
        "Caecus avaritia curso sequi cubicularis summa. Architecto aeger auctor subvenio aequus solus copia venia suscipio confero. Vindico accusator tum venio.\nSumptus pecus coniuratio totam teneo communis assentator angustus viduo asper. Surgo ex explicabo solus tero cometes causa. Ustilo corrupti cilicium ascit natus reprehenderit amitto.\nAlter vulnus adfectus contabesco. Vulgaris verbera thymbra beneficium. Tenus cribro amo.",
      rate: "4",
      createdAt: "2024-05-15T15:21:51.000Z",
      updatedAt: "2024-05-15T15:21:51.000Z",
    },
  ],
  productVariantUnique: {
    ArrUniqueSize: [
      {
        id: 1,
        description: "s",
      },
      {
        id: 2,
        description: "xs",
      },
      {
        id: 3,
        description: "m",
      },
    ],
    ArrUniqueColor: [
      {
        id: 6,
        description: "Màu Đen",
      },
      {
        id: 5,
        description: "Màu Xanh",
      },
    ],
  },
};

const ProductDetails = () => {
  const { control } = useForm();
  const [imgSelected, setImgSelected] = useState(1);
  const [colorSelected, setColorSelected] = useState();
  const [sizeSelected, setSizeSelected] = useState();

  const settings = {
    className: "center ",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    // arrows: true, // Bật mũi tên điều hướng
    // nextArrow: ">", // Component mũi tên next
    // prevArrow: <ChevronLeft color="red" size={"80px"} />, // Component mũi tên prev
  };

  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-10">
        <div className="flex flex-col gap-y-5">
          <Image
            url={data?.image?.length > 0 && data?.image[imgSelected - 1]?.url}
            className="w-full max-h-[600px] h-[100%] rounded-md overflow-hidden"
          ></Image>

          {data.image.length > 4 ? (
            <div className="productDetails slider-container ">
              <Slider {...settings}>
                {data?.image?.length > 0 &&
                  data.image.map((img) => (
                    <div
                      key={img.id}
                      className=" "
                      onClick={() => setImgSelected(img.id)}
                    >
                      <Image
                        url={img?.url}
                        className={`Imgthumb  ${
                          imgSelected === img.id ? "activeImageThumb" : ""
                        }  w-full h-[100px] px-2 cursor-pointer `}
                      ></Image>
                    </div>
                  ))}
              </Slider>
            </div>
          ) : (
            <div className="flex items-center">
              {data?.image?.length > 0 &&
                data.image.map((img) => (
                  <div key={img.id} onClick={() => setImgSelected(img.id)}>
                    <Image
                      url={img?.url}
                      className="Imgthumb w-full h-[100px] px-2 "
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
          <h1 className="text-text3 text-[14px] font-normal">
            Còn lại: 38 sản phẩm
          </h1>
          <div className="flex flex-col gap-y-4">
            {data?.productVariantUnique?.ArrUniqueColor.length > 0 && (
              <div className="flex flex-col gap-y-4">
                <h1 className="text-textBold text-[14px] font-normal">
                  Chọn màu sắc
                </h1>
                <div className="grid grid-cols-3 gap-4 ">
                  {data?.productVariantUnique?.ArrUniqueColor.length > 0 &&
                    data?.productVariantUnique?.ArrUniqueColor.map((color) => (
                      <div
                        key={color.id}
                        onClick={() => setColorSelected(color.id)}
                      >
                        <AttributeProduct
                          title={color.description}
                          className={`cursor-pointer ${
                            colorSelected === color.id
                              ? "bg-black text-white outline-none"
                              : ""
                          }`}
                        ></AttributeProduct>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {data?.productVariantUnique?.ArrUniqueSize.length > 0 && (
              <div className="flex flex-col gap-y-4">
                <h1 className="text-textBold text-[14px] font-normal">
                  Chọn size
                </h1>

                <div className="grid grid-cols-6 gap-4">
                  {data?.productVariantUnique?.ArrUniqueSize.length > 0 &&
                    data?.productVariantUnique?.ArrUniqueSize.map((size) => (
                      <div
                        key={size.id}
                        onClick={() => setSizeSelected(size.id)}
                      >
                        <AttributeProduct
                          className={`max-w-[80px] uppercase cursor-pointer  ${
                            sizeSelected === size.id
                              ? "bg-black text-white outline-none"
                              : ""
                          }`}
                          title={size.description}
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
              <ProHandleQuantity
                control={control}
                name="quantity"
              ></ProHandleQuantity>
            </div>
          </div>

          <div className="flex items-center gap-x-4 py-5">
            <Button kind="secondary" className="py-3 px-4 rounded-[4px]">
              Thêm vào Giỏ hàng
            </Button>
            <Button kind="primary" className="py-3 px-4  rounded-[4px]">
              Mua Ngay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
