import React from "react";
import Gap from "../components/Commom/Gap";
import Box from "../components/Commom/Box";
import Image from "../components/Image/Image";
import NameUser from "../modules/User/parts/NameUser";
import LabelRedirect from "../components/Label/LabelRedirect";
import ContentUser from "../modules/User/parts/ContentUser";
import { Pagination, Space, Table, Tag } from "antd";
import DateCreateNews from "../modules/FashionNews/parts/DateCreateNews";
import PriceProduct from "../modules/Product/parts/PriceProduct";
import DateOrderProduct from "../modules/Product/parts/DateOrderProduct";
import { Epath } from "../routes/routerConfig";

const UserDashboardPage = () => {
  const columns = [
    {
      title: "Mã Đơn",
      dataIndex: "orderId",
      key: "orderId",
      render: (text) => <h1 className="text-textBold font-normal">#{text}</h1>,
    },
    {
      title: "Ngày Đặt",
      dataIndex: "date",
      key: "date",
      render: (date) => <DateOrderProduct date={date}></DateOrderProduct>,
    },
    {
      title: "Tổng Tiền",
      dataIndex: "total",
      key: "total",
      render: (_, { total }) => (
        <div className="flex items-center gap-x-1">
          <PriceProduct price={total.price}></PriceProduct>
          <span className="text-text1 font-medium">
            ( {total.quantityPro} sản phẩm ){" "}
          </span>
        </div>
      ),
    },
    {
      title: "Trạng Thái",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <>
          {status === 0 && (
            <Tag className="py-1 px-4" color="red">
              Đã hủy
            </Tag>
          )}
          {status === 1 && (
            <Tag className="py-1 px-4" color="orange">
              Chờ Xác Nhận
            </Tag>
          )}
          {status === 2 && (
            <Tag className="py-1 px-4" color="cyan">
              Đã Xác Nhận
            </Tag>
          )}
          {status === 3 && (
            <Tag className="py-1 px-4" color="blue">
              Đang Xử Lý
            </Tag>
          )}
          {status === 4 && (
            <Tag className="py-1 px-4" color="purple">
              Đang Giao Hàng
            </Tag>
          )}
          {status === 5 && (
            <Tag className="py-1 px-4" color="green">
              Đã Giao
            </Tag>
          )}
        </>
      ),
    },
    {
      title: "",
      key: "action",
      dataIndex: "action",
      render: (label) => (
        <LabelRedirect url="/#" title={label} icon=""></LabelRedirect>
      ),
    },
  ];
  const data = [
    {
      key: 1,
      orderId: "001",
      date: "4/6/2024",
      total: { price: 362000000, quantityPro: 5 },
      status: 5,
      action: "Xem Chi Tiết ",
    },
    {
      key: 2,
      orderId: "002",
      date: "4/6/2024",
      total: { price: 362000000, quantityPro: 5 },
      status: 1,
      action: "Xem Chi Tiết ",
    },
  ];
  return (
    <div>
      <div className="flex items-center gap-x-4">
        <Box isShowheader={false} className="flex-1">
          <div className="flex items-center gap-x-4 justify-center">
            <div className="flex   justify-center items-center flex-col gap-y-4">
              <Image className="w-[160px] h-[160px] rounded-full overflow-hidden"></Image>
              <NameUser name="Tiến Nguyễn"></NameUser>
              <LabelRedirect title="Chỉnh sửa thông tin "></LabelRedirect>
            </div>
          </div>
        </Box>

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

              <LabelRedirect title="Chỉnh sửa thông tin "></LabelRedirect>
            </div>
          </div>
        </Box>
      </div>
      <div className="mt-5">
        <Box
          title="Đơn hàng của tôi"
          url={Epath.myOrders}
          labelRedirec="Xem thêm"
          isShowLabel
        >
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
        </Box>
      </div>
    </div>
  );
};

export default UserDashboardPage;
