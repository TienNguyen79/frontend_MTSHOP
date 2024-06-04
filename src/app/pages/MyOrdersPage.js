import React from "react";
import LabelRedirect from "../components/Label/LabelRedirect";
import { Table, Tabs, Tag } from "antd";
import DateOrderProduct from "../modules/Product/parts/DateOrderProduct";
import PriceProduct from "../modules/Product/parts/PriceProduct";
import Box from "../components/Commom/Box";
import { Epath } from "../routes/routerConfig";

const MyOrdersPage = () => {
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
        <LabelRedirect url="/myOrders/1" title={label} icon=""></LabelRedirect>
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

  const items = [
    {
      key: 1,
      label: "Chờ Xác Nhận",
    },
    {
      key: 2,
      label: "Đã Xác Nhận",
    },
    {
      key: 3,
      label: "Đang Xử Lý",
    },
    {
      key: 4,
      label: "Đang Giao Hàng",
    },
    {
      key: 5,
      label: "Đã Giao Hàng",
    },
    {
      key: 0,
      label: "Đã Hủy",
    },
  ];

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        items={items}
        className="tabsOrder text-textBold font-semibold  "
      />

      <Box title="Đơn hàng của tôi">
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
  );
};

export default MyOrdersPage;
