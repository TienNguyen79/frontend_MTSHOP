import React, { useEffect, useRef } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCancelOrder,
  handleGetDetailsOrder,
} from "../../store/order/handleOrder";
import Button from "../components/Button/Button";
import { Epath } from "../routes/routerConfig";
import Swal from "sweetalert2";
import { saveArrayLS } from "../../utils/localStorage";
import ReactToPrint from "react-to-print";
import InvoiceComponent from "../components/Invoice/InvoiceComponent";

const OrderDetailsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const invoiceRef = useRef();
  const { id } = useParams();

  useEffect(() => {
    dispatch(handleGetDetailsOrder(id));
  }, [id, dispatch]);

  const { dataDetailsOrder } = useSelector((state) => state.order);

  const dataTableProduct =
    dataDetailsOrder?.OrderDetails?.length > 0
      ? dataDetailsOrder?.OrderDetails?.map((product) => ({
          key: product.id,
          product: {
            url:
              product?.ProductDetail?.Product?.image[0]?.url || defaultImage2,
            name: product?.ProductDetail?.Product?.name,
            size: product?.properties?.size?.description || "",
            color: product?.properties?.color?.description || "",
          },
          price: product?.price,
          quantity: product?.quantity,
          total: product.total,
        }))
      : [];
  console.log("🚀 ~ OrderDetailsPage ~ dataTableProduct:", dataTableProduct);

  //--- lưu trong hóa đơn

  const formatDataPro =
    dataTableProduct?.length > 0 &&
    dataTableProduct.map((item) => ({
      key: item.key,
      url: item?.product?.url,
      name: item?.product?.name,
      product: {
        size: item?.product?.size || "",
        color: item?.product?.color || "",
      },
      price: item?.price,
      quantity: item?.quantity,
      total: item.total,
    }));

  const dataInvoice = {
    address: dataDetailsOrder?.deliveryAddress?.address,
    arrPro: formatDataPro,
    paymentMethod:
      dataDetailsOrder?.PaymentMethodUser?.PaymentMethodSystem?.name,
  };
  saveArrayLS("dataInvoice", dataInvoice);

  //-------------------------------------

  const columns = [
    {
      title: "Sản Phẩm",
      dataIndex: "product",
      key: "product",
      render: (_, { product }) => (
        <div className="flex items-start gap-x-3">
          <div className="flex-1">
            <Image
              className="w-[80px] h-[80px] rounded-lg overflow-hidden"
              url={product?.url}
            ></Image>
          </div>
          <div className="flex flex-col flex-[2]">
            <TitleProduct className="text-textBold font-medium max-w-[200px]">
              {product?.name}
            </TitleProduct>

            {product.size && (
              <AttributeInCart className="uppercase">
                SIZE: {product.size}
              </AttributeInCart>
            )}
            {product.color && (
              <AttributeInCart className="uppercase">
                COLOR: {product.color}
              </AttributeInCart>
            )}
          </div>
        </div>
      ),
      width: 300,
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

  return (
    <div>
      <div className="hidden">
        <InvoiceComponent ref={invoiceRef} />
      </div>
      <Box
        title="Chi Tiết Đơn Hàng"
        labelRedirec="Quay lại"
        url={Epath.userDashboard}
        isShowLabel
      >
        <div className="flex justify-end gap-x-3">
          {dataDetailsOrder.orderState !== "0" && (
            <ReactToPrint
              trigger={() => (
                <Button className="my-2 !py-1 !px-3 text-sm rounded-md bg-primary text-white">
                  In Hóa Đơn
                </Button>
              )}
              content={() => invoiceRef.current}
            />
          )}
          {dataDetailsOrder.orderState === "1" && (
            <Button
              className="my-2 !py-1 !px-3 text-sm rounded-md bg-error text-white"
              onClick={() =>
                Swal.fire({
                  title: `Bạn có chắc chắn muốn hủy đơn hàng ?`,
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Chắc Chắn",
                  cancelButtonText: "Hủy Bỏ",
                }).then((result) => {
                  if (result.isConfirmed) {
                    dispatch(
                      handleCancelOrder({
                        id: dataDetailsOrder?.id,
                        callBack: () => {
                          navigate("/myOrders/1");
                        },
                      })
                    );
                  }
                })
              }
            >
              Hủy Đơn Hàng
            </Button>
          )}
        </div>
        <div className="flex items-center gap-x-3">
          <Box isShowheader={false} className="flex-1">
            <div className="flex flex-col  py-2">
              <h1 className="text-text3 uppercase text-[18px]">
                Địa chỉ giao hàng
              </h1>
              <div className="flex justify-center items-start flex-col gap-y-3 mt-2">
                <NameUser name={dataDetailsOrder?.User?.userName}></NameUser>
                <ContentUser>tiennguyen@gmail.com</ContentUser>
                <ContentUser className="!text-text1 text-[16px]">
                  {dataDetailsOrder?.deliveryAddress?.address}
                </ContentUser>
                <ContentUser className="!text-text1 text-[16px]">
                  {dataDetailsOrder?.User?.phoneNumber}
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
                  #{dataDetailsOrder?.id}
                </span>
              </h1>
              <h1 className="mt-1">
                {dataDetailsOrder?.PaymentMethodUser?.PaymentMethodSystem?.name}
              </h1>
              <div>
                <div className="flex items-center justify-between pt-6  border-b-[3px] border-text2">
                  <Title
                    title="Tổng Tiền"
                    className="text-[17px] font-normal"
                  ></Title>
                  <PriceProduct price={dataDetailsOrder?.total}></PriceProduct>
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
                  <PriceProduct price={dataDetailsOrder?.total}></PriceProduct>
                </div>
              </div>
            </div>
          </Box>
        </div>

        <div className="mt-12 mb-[60px]">
          {dataDetailsOrder?.orderState !== "0" ? (
            <Steps
              className="text-text1 font-medium"
              size="small"
              current={parseInt(dataDetailsOrder?.orderState - 1)}
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
          ) : (
            <h1 className="text-center text-error font-semibold">
              Đơn hàng đã bị Hủy
            </h1>
          )}
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={dataTableProduct}
            pagination={false}
            scroll={{ y: 400 }}
          />
        </div>
      </Box>
    </div>
  );
};

export default OrderDetailsPage;
