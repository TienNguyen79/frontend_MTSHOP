import React, { useEffect, useState } from "react";
import Gap from "../components/Commom/Gap";
import { useForm } from "react-hook-form";
import Input from "../components/Input/Input";
import { Form, Modal, Radio, Select, Space } from "antd";
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
import TextArea2 from "../components/Input/TextArea";
import { getArrayFromLS } from "../../utils/localStorage";
import { formatPrice } from "../../utils/functions";
import { useSelector } from "react-redux";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";
import dataProvince from "../../utils/province.json";
const CheckOutPage = () => {
  console.log(dataProvince.data);
  const { control, setValue } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const [dataCity, setDataCity] = useState([]);
  const [dataDistrict, setDistrict] = useState([]);
  const [dataWards, setWards] = useState([]);
  const [CityId, setCityId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [wardsId, setWardsId] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal2 = () => {
    setIsModalOpen2(true);
    setIsModalOpen(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  const { dataCurrentUser } = useSelector((state) => state.user);
  // ------------------------

  const [addressId, setAddressId] = useState(
    dataCurrentUser?.Addresses?.[0]?.id
  );
  // ------------------------

  const [infoAddress, setInfoAddress] = useState(
    dataCurrentUser?.Addresses?.[0]?.address
  );
  // ------------------------

  const splitAddress = infoAddress?.split(",");

  // ------------------------
  const dataProInCheckout = getArrayFromLS("dataProInCheckout");
  const totalMoneyCheckout = dataProInCheckout?.reduce(
    (accumulator, currentValue) =>
      accumulator +
      currentValue.quantity *
        parseFloat(formatPrice(currentValue.price).replace(".", "")),
    0
  );
  // ------------------------

  const handleChangeAddress = (e) => {
    setAddressId(e.target.value);
    const selectedItem = dataCurrentUser.Addresses.find(
      (item) => item.id === e.target.value
    );
    if (selectedItem) {
      setInfoAddress(selectedItem.address);
    }
  };
  // ------------------------

  useEffect(() => {
    setValue("name", dataCurrentUser?.userName);
    setValue("email", dataCurrentUser?.email);
    setValue("phoneNumber", dataCurrentUser?.phoneNumber);
    setValue("city", splitAddress[3]);
    setValue("district", splitAddress[2]);
    setValue("wards", splitAddress[1]);
    setValue("detailAddress", splitAddress[0]);
  }, [dataCurrentUser, infoAddress]);
  // ------------------------

  // useEffect(() => {
  //   const fetchDataCity = async () => {
  //     const resCity = await axios.get(
  //       "https://vapi.vnappmob.com/api/province",
  //       {
  //         headers: {
  //           "Access-Control-Allow-Origin": "*",
  //           "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //         },
  //       }
  //     );
  //     if (resCity.status === 200) {
  //       // setDataCity(resCity.data);
  //     }
  //   };
  //   fetchDataCity();
  // }, []);
  const handleAddAddressUser = (data) => {
    console.log("🚀 ~ handleAddAddressUser ~ data:", data);
  };

  const validateNoComma = (_, value) => {
    if (value && value.includes(",")) {
      return Promise.reject(
        new Error("Địa chỉ Chi Tiết không được chứa dấu phẩy!")
      );
    }
    return Promise.resolve();
  };

  return (
    <div>
      <Modal
        title="Chọn địa chỉ nhận hàng"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
      >
        <Radio.Group
          defaultValue={dataCurrentUser?.Addresses?.[0]?.id || 1}
          onChange={handleChangeAddress}
        >
          <Space direction="vertical">
            {dataCurrentUser?.Addresses?.map((item) => (
              <Radio key={item.id} value={item.id}>
                <p className="ml-8 my-2 text-text1 font-normal text-sm">
                  {item.address}
                </p>
              </Radio>
            ))}
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
        <Form onFinish={handleAddAddressUser}>
          <div className="checkout flex flex-col items-center ">
            <FlexCol title="Thành Phố" className="w-full">
              <Form.Item
                name="city"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn Thành Phố !",
                  },
                ]}
              >
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
                      label: "Hà Nội",
                    },
                    {
                      value: "2",
                      label: "Thành Phố HCM",
                    },
                    {
                      value: "3",
                      label: "Đà Lạt",
                    },
                    {
                      value: "4",
                      label: "Tuyên Quang",
                    },
                    {
                      value: "5",
                      label: "Đà Nẵng",
                    },
                    {
                      value: "6",
                      label: "Bình Dương",
                    },
                  ]}
                />
              </Form.Item>
            </FlexCol>
            <FlexCol title="Quận Huyện" className="w-full">
              <Form.Item
                name="province"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn Quận Huyện !",
                  },
                ]}
              >
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
                      label: "Thanh Xuân",
                    },
                    {
                      value: "2",
                      label: "Huyện Fake 1",
                    },
                    {
                      value: "3",
                      label: "Huyện Fake 2",
                    },
                    {
                      value: "4",
                      label: "Huyện Fake 4",
                    },
                    {
                      value: "5",
                      label: "Huyện Fake 5",
                    },
                    {
                      value: "6",
                      label: "Cancelled",
                    },
                  ]}
                />
              </Form.Item>
            </FlexCol>

            <FlexCol title="Xã Phường" className="w-full">
              <Form.Item
                name="wards"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn Xã Phường !",
                  },
                ]}
              >
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
                      label: "Xã Fake 1",
                    },
                    {
                      value: "2",
                      label: "Xã Fake 2",
                    },
                    {
                      value: "3",
                      label: "Xã Fake 3",
                    },
                    {
                      value: "4",
                      label: "Xã Fake 4",
                    },
                    {
                      value: "5",
                      label: "Xã Fake 5",
                    },
                    {
                      value: "6",
                      label: "Xã Fake 6",
                    },
                  ]}
                />
              </Form.Item>
            </FlexCol>

            <FlexCol title="Chi Tiết Địa Chỉ" className="w-full">
              <Form.Item
                name="AdetailAddress"
                rules={[
                  {
                    required: true,
                    message: " Vui Lòng Nhập địa chỉ chi tiết",
                  },
                  { validator: validateNoComma },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder="Chi tiết địa chỉ của bạn..."
                  // maxLength={6}
                />
              </Form.Item>
            </FlexCol>
          </div>

          <Button
            className="py-2 px-5 rounded mt-3 w-full "
            type="submit"
            kind="secondary"
          >
            <h1 className="ml-2">Hoàn thành</h1>
          </Button>
        </Form>
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
                      {infoAddress}
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
                    disabled
                  ></Input>
                </FlexCol>
                <FlexCol title="Email" className="w-full">
                  <Input
                    control={control}
                    name="email"
                    placeholder="Email của bạn..."
                    disabled
                  ></Input>
                </FlexCol>
              </div>
              <FlexCol title="Số Điện Thoại" className="w-full">
                <Input
                  control={control}
                  name="phoneNumber"
                  placeholder="Số điện thoại của bạn..."
                  disabled
                ></Input>
              </FlexCol>
              {dataCurrentUser?.Addresses?.length > 0 ? (
                <div className="checkout flex flex-col items-center gap-y-5">
                  <FlexCol title="Thành Phố" className="w-full">
                    <Input
                      control={control}
                      placeholder="Thành Phố của bạn..."
                      name="city"
                      disabled
                    ></Input>
                  </FlexCol>
                  <FlexCol title="Quận Huyện" className="w-full">
                    <Input
                      control={control}
                      placeholder="Quận Huyện của bạn..."
                      name="district"
                      disabled
                    ></Input>
                  </FlexCol>

                  <FlexCol title="Xã Phường" className="w-full">
                    <Input
                      control={control}
                      placeholder="Xã Phường của bạn..."
                      name="wards"
                      disabled
                    ></Input>
                  </FlexCol>

                  <FlexCol title="Chi Tiết Địa Chỉ" className="w-full">
                    <TextArea2
                      control={control}
                      placeholder="Chi tiết địa chỉ của bạn..."
                      name="detailAddress"
                      disabled
                    ></TextArea2>
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
