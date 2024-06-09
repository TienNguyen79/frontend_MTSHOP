import React, { useState } from "react";
import Gap from "../components/Commom/Gap";
import { useForm } from "react-hook-form";
import Input from "../components/Input/Input";
import { Modal, Radio, Select, Space } from "antd";
import Title from "../components/Commom/Title";
import FlexCol from "../components/Commom/FlexCol";
import ProductHozizontal from "../modules/Product/ProductHozizontal";
import PriceProduct from "../modules/Product/parts/PriceProduct";
import {
  ArrowRight,
  BaggageClaim,
  ChevronRight,
  CirclePlus,
  MapPin,
  MapPinned,
  Shirt,
  ShoppingBag,
  WalletMinimal,
} from "lucide-react";
import Button from "../components/Button/Button";
import TextArea from "../components/Input/TextArea";
import { getArrayFromLS } from "../../utils/localStorage";
import { formatPrice } from "../../utils/functions";
import { useSelector } from "react-redux";

const CheckOutPage = () => {
  const { control } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal2 = () => {
    setIsModalOpen2(true);
    setIsModalOpen(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  const { dataCurrentUser } = useSelector((state) => state.user);
  console.log("🚀 ~ CheckOutPage ~ dataCurrentUser:", dataCurrentUser);

  const dataProInCheckout = getArrayFromLS("dataProInCheckout");

  const totalMoneyCheckout = dataProInCheckout?.reduce(
    (accumulator, currentValue) =>
      accumulator +
      currentValue.quantity *
        parseFloat(formatPrice(currentValue.price).replace(".", "")),
    0
  );

  return (
    <div>
      <Modal
        title="Chọn địa chỉ nhận hàng"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
      >
        <Radio.Group defaultValue={1}>
          <Space direction="vertical">
            <Radio value={1}>
              <p className="ml-8 my-2 text-text1 font-normal text-sm">
                Thôn Gì Đó, Huyện Này Nọ , Thành Phố Hà Nội Thôn Gì Đó, Huyện
                Này Nọ , Thành Phố Hà Nội
              </p>
            </Radio>
            <Radio value={2}>
              <p className="ml-8 my-2 text-text1 font-normal text-sm">
                Thôn Gì Đó 2, Huyện Này Nọ 2 , Thành Phố Hà Nội
              </p>
            </Radio>
          </Space>
        </Radio.Group>
        <div className="flex items-center justify-end">
          <Button
            className="py-2 px-5 rounded mt-3 "
            onClick={showModal2}
            kind="secondary"
          >
            <CirclePlus />
            <h1 className="ml-2"> Thêm Địa Chỉ</h1>
          </Button>
        </div>
      </Modal>

      <Modal
        title="Địa Chỉ Mới"
        open={isModalOpen2}
        onCancel={handleCancel2}
        footer={false}
        width={600}
      >
        <div className="checkout flex flex-col items-center gap-y-5">
          <FlexCol title="Thành Phố" className="w-full">
            <Select
              showSearch
              // className="w-[300px] h-[45px]"
              className=" w-full h-[45px]"
              placeholder="Thành Phố của bạn..."
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Not Identified",
                },
                {
                  value: "2",
                  label: "Closed",
                },
                {
                  value: "3",
                  label: "Communicated",
                },
                {
                  value: "4",
                  label: "Identified",
                },
                {
                  value: "5",
                  label: "Resolved",
                },
                {
                  value: "6",
                  label: "Cancelled",
                },
              ]}
            />
          </FlexCol>
          <FlexCol title="Quận Huyện" className="w-full">
            <Select
              showSearch
              // className="w-[300px] h-[45px]"
              className=" w-full h-[45px]"
              placeholder="Quận Huyện của bạn...."
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Not Identified",
                },
                {
                  value: "2",
                  label: "Closed",
                },
                {
                  value: "3",
                  label: "Communicated",
                },
                {
                  value: "4",
                  label: "Identified",
                },
                {
                  value: "5",
                  label: "Resolved",
                },
                {
                  value: "6",
                  label: "Cancelled",
                },
              ]}
            />
          </FlexCol>

          <FlexCol title="Xã Phường" className="w-full">
            <Select
              showSearch
              // className="w-[300px] h-[45px]"
              className=" w-full h-[45px] !text-emerald-600"
              placeholder="Xã Phường của bạn"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Not Identified",
                },
                {
                  value: "2",
                  label: "Closed",
                },
                {
                  value: "3",
                  label: "Communicated",
                },
                {
                  value: "4",
                  label: "Identified",
                },
                {
                  value: "5",
                  label: "Resolved",
                },
                {
                  value: "6",
                  label: "Cancelled",
                },
              ]}
            />
          </FlexCol>

          <FlexCol title="Chi Tiết Địa Chỉ" className="w-full">
            <TextArea
              control={control}
              placeholder="Chi tiết địa chỉ của bạn..."
              name="detailAddress"
            ></TextArea>
          </FlexCol>
        </div>

        <Button className="py-2 px-5 rounded mt-3 w-full " kind="secondary">
          <h1 className="ml-2">Hoàn thành</h1>
        </Button>
      </Modal>
      <Gap>
        <div className="grid grid-cols-7 gap-x-6">
          <div className="col-span-4">
            <div className="flex items-center gap-x-3">
              <MapPin />
              <Title title="Thông Tin Giao Hàng"></Title>
            </div>

            <div className="flex flex-col gap-y-5 mt-5">
              {dataCurrentUser?.Addresses?.length > 0 && (
                <div
                  onClick={showModal}
                  className="flex items-center justify-between cursor-pointer py-3 px-4 rounded-md bg-text2"
                >
                  <div>
                    <div className="flex items-center gap-x-3">
                      <MapPinned />
                      <Title
                        title="Địa chỉ nhận hàng"
                        className="text-[14px] font-normal"
                      >
                        {" "}
                      </Title>
                    </div>
                    <p className="ml-8 my-3 text-text1 font-normal text-sm">
                      Thôn Gì Đó, Huyện Này Nọ , Thành Phố Hà Nội
                    </p>
                  </div>
                  <ChevronRight></ChevronRight>
                </div>
              )}
              <div className="flex flex-col items-center gap-y-3">
                <FlexCol title="Tên " className="w-full">
                  <Input
                    control={control}
                    name="name"
                    placeholder="Tên của bạn..."
                  ></Input>
                </FlexCol>
                <FlexCol title="Email" className="w-full">
                  <Input
                    control={control}
                    name="email"
                    placeholder="Email của bạn..."
                  ></Input>
                </FlexCol>
              </div>
              <FlexCol title="Số Điện Thoại" className="w-full">
                <Input
                  control={control}
                  name="phoneNumber"
                  placeholder="Số điện thoại của bạn..."
                ></Input>
              </FlexCol>
              {dataCurrentUser?.Addresses?.length > 0 ? (
                <div className="checkout flex flex-col items-center gap-y-5">
                  <FlexCol title="Thành Phố" className="w-full">
                    <Select
                      showSearch
                      // className="w-[300px] h-[45px]"
                      className=" w-full h-[45px]"
                      placeholder="Thành Phố của bạn..."
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "1",
                          label: "Not Identified",
                        },
                        {
                          value: "2",
                          label: "Closed",
                        },
                        {
                          value: "3",
                          label: "Communicated",
                        },
                        {
                          value: "4",
                          label: "Identified",
                        },
                        {
                          value: "5",
                          label: "Resolved",
                        },
                        {
                          value: "6",
                          label: "Cancelled",
                        },
                      ]}
                    />
                  </FlexCol>
                  <FlexCol title="Quận Huyện" className="w-full">
                    <Select
                      showSearch
                      // className="w-[300px] h-[45px]"
                      className=" w-full h-[45px]"
                      placeholder="Quận Huyện của bạn...."
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "1",
                          label: "Not Identified",
                        },
                        {
                          value: "2",
                          label: "Closed",
                        },
                        {
                          value: "3",
                          label: "Communicated",
                        },
                        {
                          value: "4",
                          label: "Identified",
                        },
                        {
                          value: "5",
                          label: "Resolved",
                        },
                        {
                          value: "6",
                          label: "Cancelled",
                        },
                      ]}
                    />
                  </FlexCol>

                  <FlexCol title="Xã Phường" className="w-full">
                    <Select
                      showSearch
                      // className="w-[300px] h-[45px]"
                      className=" w-full h-[45px] !text-emerald-600"
                      placeholder="Xã Phường của bạn"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "1",
                          label: "Not Identified",
                        },
                        {
                          value: "2",
                          label: "Closed",
                        },
                        {
                          value: "3",
                          label: "Communicated",
                        },
                        {
                          value: "4",
                          label: "Identified",
                        },
                        {
                          value: "5",
                          label: "Resolved",
                        },
                        {
                          value: "6",
                          label: "Cancelled",
                        },
                      ]}
                    />
                  </FlexCol>

                  <FlexCol title="Chi Tiết Địa Chỉ" className="w-full">
                    <TextArea
                      control={control}
                      placeholder="Chi tiết địa chỉ của bạn..."
                      name="detailAddress"
                    ></TextArea>
                  </FlexCol>
                </div>
              ) : (
                <div className="flex items-center justify-start">
                  <Button
                    className="py-2 px-5 rounded mt-3 "
                    onClick={showModal2}
                    kind="secondary"
                  >
                    <CirclePlus />
                    <h1 className="ml-2"> Thêm Địa Chỉ</h1>
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className="col-span-3 ">
            <div className="border-[1px] border-text3 py-3 px-4 rounded-lg ">
              <div className=" pt-3 pb-5 flex items-center gap-x-3 ">
                <ShoppingBag />

                <Title
                  title="Sản Phẩm"
                  className="text-[24px] font-semibold"
                ></Title>
              </div>
              <div className="flex scroll-hidden flex-col gap-y-3 max-h-[400px] overflow-y-auto">
                {dataProInCheckout?.length > 0 &&
                  dataProInCheckout.map((item, index) => (
                    <ProductHozizontal
                      key={item.idProductDetails}
                      totalMoneyCheckout={totalMoneyCheckout}
                      data={item}
                    ></ProductHozizontal>
                  ))}
              </div>

              <div>
                <div className="flex items-center justify-between pt-6  border-b-[3px] border-text2">
                  <Title
                    title="Tổng Tiền"
                    className="text-[17px] font-normal"
                  ></Title>
                  <PriceProduct price={totalMoneyCheckout}></PriceProduct>
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
                  <PriceProduct price={totalMoneyCheckout}></PriceProduct>
                </div>
              </div>
            </div>
            <div className="border-[1px] border-text3 py-3 px-4 rounded-lg mt-5">
              <div className=" pt-3 pb-5 flex items-center gap-x-3 ">
                <WalletMinimal />

                <Title
                  title="Phương Thức Thanh Toán"
                  className="text-[18px] font-semibold"
                ></Title>
              </div>
              <div>
                <Radio.Group defaultValue={1}>
                  <Space direction="vertical">
                    <Radio value={1}>
                      <Title
                        title="Thanh Toán Khi Nhận Hàng"
                        className="text-[16px]"
                      ></Title>
                    </Radio>
                    <Radio value={2}>
                      <Title
                        title="Thanh Toán Qua Ngân Hàng"
                        className="text-[16px]"
                      ></Title>
                    </Radio>
                  </Space>
                </Radio.Group>
              </div>
            </div>
            <Button className="py-3 px-4 w-full mt-4 rounded-md" kind="primary">
              Đặt Hàng Ngay
            </Button>
          </div>
        </div>
      </Gap>
    </div>
  );
};

export default CheckOutPage;
