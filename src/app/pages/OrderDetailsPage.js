import React from "react";
import Box from "../components/Commom/Box";
import NameUser from "../modules/User/parts/NameUser";
import ContentUser from "../modules/User/parts/ContentUser";
import Title from "../components/Commom/Title";
import PriceProduct from "../modules/Product/parts/PriceProduct";
import { Steps, Table, Tag } from "antd";
import { Smile } from "lucide-react";
import LabelRedirect from "../components/Label/LabelRedirect";
import DateOrderProduct from "../modules/Product/parts/DateOrderProduct";
import { defaultImage2 } from "../../utils/commom";
import Image from "../components/Image/Image";
import TitleProduct from "../modules/Product/parts/TitleProduct";
import AttributeInCart from "../modules/Product/parts/AttributeInCart";

const OrderDetailsPage = () => {
  const columns = [
    {
      title: "Sản Phẩm",
      dataIndex: "product",
      key: "product",
      render: (_, { product }) => (
        <div className="flex items-start gap-x-3">
          <Image
            className="w-[80px] h-[80px] rounded-lg overflow-hidden"
            url={product?.url}
          ></Image>
          <div className="flex flex-col">
            <TitleProduct className="text-textBold font-medium max-w-[260px]">
              {product?.name}
            </TitleProduct>
            <AttributeInCart className="uppercase">SIZE: XL</AttributeInCart>
            <AttributeInCart className="uppercase">COLOR: XANH</AttributeInCart>
          </div>
        </div>
      ),
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (_, { price }) => {
        return <PriceProduct price={price}></PriceProduct>;
      },
    },
    {
      title: "Số Lượng",
      key: "quantity",
      dataIndex: "quantity",
      render: (_, { quantity }) => {
        return (
          <h1 className="text-textBold text-[15px] font-medium">{quantity}</h1>
        );
      },
    },
    {
      title: "Tổng Tiền",
      key: "action",
      dataIndex: "total",
      render: (_, { total }) => {
        return <PriceProduct price={total}></PriceProduct>;
      },
    },
  ];
  const data = [
    {
      key: 1,
      product: {
        url: defaultImage2,
        name: "Sản Phẩm Chất Lượng Cao Sản Phẩm Chất Lượng Cao ",
      },
      price: 200000,
      quantity: 40,
      total: 5000000,
    },
    {
      key: 2,
      product: {
        url: defaultImage2,
        name: "Sản Phẩm Chất Lượng Cao Sản Phẩm Chất Lượng Cao ",
      },
      price: 200000,
      quantity: 40,
      total: 5000000,
    },
  ];

  return (
    <div>
      <Box
        title="Chi Tiết Đơn Hàng"
        labelRedirec="Quay lại"
        url="/#"
        isShowLabel
      >
        <div className="flex items-center gap-x-3">
          <Box isShowheader={false} className="flex-1">
            <div className="flex flex-col  py-2">
              <h1 className="text-text3 uppercase text-[18px]">
                Địa chỉ giao hàng
              </h1>
              <div className="flex justify-center items-start flex-col gap-y-3 mt-2">
                <NameUser name="Tiến Nguyễn"></NameUser>
                <ContentUser>tiennguyen@gmail.com</ContentUser>
                <ContentUser className="!text-text1 text-[16px]">
                  Nguyễn Trãi, Quận Thanh Xuân , Thành Phố Hà Nội
                </ContentUser>
                <ContentUser className="!text-text1 text-[16px]">
                  09199 888 88
                </ContentUser>
              </div>
            </div>
          </Box>
          <Box isShowheader={false} className="flex-1">
            <div className="flex flex-col  py-2">
              {/* <h1 className="text-text3 uppercase text-[18px]">
                Địa chỉ giao hàng
              </h1> */}
              <h1>
                Mã Đơn:{" "}
                <span className="inline-block text-textBold font-semibold">
                  #0001
                </span>
              </h1>
              <h1 className="mt-1">Thanh Toán Khi Nhận Hàng</h1>
              <div>
                <div className="flex items-center justify-between pt-6  border-b-[3px] border-text2">
                  <Title
                    title="Tổng Tiền"
                    className="text-[17px] font-normal"
                  ></Title>
                  <PriceProduct></PriceProduct>
                </div>
                <div className="flex items-center justify-between pt-6  border-b-[3px] border-text2">
                  <Title
                    title="Phí Ship"
                    className="text-[17px] font-normal"
                  ></Title>
                  <h1>Miễn Phí</h1>
                </div>
                <div className="flex items-center justify-between pt-6 pb-3 ">
                  <Title
                    title="Tổng Tiền"
                    className="text-[17px] font-normal"
                  ></Title>
                  <PriceProduct></PriceProduct>
                </div>
              </div>
            </div>
          </Box>
        </div>

        <div className="mt-12 mb-[60px]">
          <Steps
            className="text-text1 font-medium"
            size="small"
            current={4}
            items={[
              {
                title: "Đã Xác Nhận",
              },
              {
                title: "Đang Xử Lý",
              },
              {
                title: "Đang Giao hàng",
              },
              {
                title: `Giao Hàng Thành Công 😍`,
                // icon: <Smile></Smile>,
              },
            ]}
          />
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              defaultCurrent: 1,
              total: 50,
              pageSize: 10,
              // onChange: (page, pageSize) => {
              //   console.log(`Page: ${page}, PageSize: ${pageSize}`);
              // },
            }}
          />
        </div>
      </Box>
    </div>
  );
};

export default OrderDetailsPage;
