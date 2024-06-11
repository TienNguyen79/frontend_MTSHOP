import React, { useEffect, useRef, useState } from "react";
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
import { getArrayFromLS, saveArrayLS } from "../../utils/localStorage";
import { formatPrice } from "../../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import dataProvince from "../../utils/province.json";
import { handleAddAddressUser } from "../../store/user/handleUser";
import { toast } from "react-toastify";
import { handleOrderProduct } from "../../store/order/handleOrder";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ReactToPrint from "react-to-print";
import InvoiceComponent from "../components/Invoice/InvoiceComponent";
const CheckOutPage = () => {
  const { control, setValue } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [form] = Form?.useForm();
  const [dataCity, setDataCity] = useState(dataProvince.data);
  const [dataDistrict, setDistrict] = useState([]);
  const [dataWards, setWards] = useState([]);
  const [labelCity, setlabelCity] = useState("");
  const [labelDistrict, setLabelDistrict] = useState("");
  const [labelWards, setLabelWards] = useState("");
  const [shouldPrint, setShouldPrint] = useState(false);
  const [swalInstance, setSwalInstance] = useState(null);
  const btnRef = useRef();
  const invoiceRef = useRef();

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

  const [isModalOpen3, setIsModalOpen3] = useState(false);

  const showModal3 = () => {
    setIsModalOpen3(true);
  };

  const handleOk3 = () => {
    setIsModalOpen3(false);
  };

  const handleCancel3 = () => {
    setIsModalOpen3(false);
  };

  const { dataCurrentUser } = useSelector((state) => state.user);
  // ------------------------

  const [addressId, setAddressId] = useState(
    dataCurrentUser?.Addresses?.[0]?.id || undefined
  );

  const [PaymentMehodId, setPaymentMehodId] = useState(1);
  const [selectedTitlePaymentMehod, setSelectedTitlePaymentMehod] = useState(
    "Thanh Toán Khi Nhận Hàng"
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

  const handleChangePaymentMethod = (e) => {
    setPaymentMehodId(e.target.value);

    // lấy title để lưu vào hóa đơn
    const title =
      e.target.value === 1
        ? "Thanh Toán Khi Nhận Hàng"
        : "Thanh Toán Qua Ngân Hàng";
    setSelectedTitlePaymentMehod(title);

    if (e.target.value === 2) {
      toast.warning("Tính năng này sẽ phát triển sớm !", {
        autoClose: 1000,
      });
      setPaymentMehodId(1);
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

  const handleAddAddressUserForn = (data) => {
    const checkAdetailAddress = data.AdetailAddress.split(",");

    const joinAddress = `${checkAdetailAddress.join(
      " "
    )}, ${labelWards}, ${labelDistrict}, ${labelCity}`;

    dispatch(
      handleAddAddressUser({
        address: joinAddress,
        callBack: () => {
          toast.success("Thêm địa chỉ thành công", { autoClose: 800 });
          setIsModalOpen2(false);
        },
      })
    );
  };

  // const validateNoComma = (_, value) => {
  //   if (value && value.includes(",")) {
  //     return Promise.reject(
  //       new Error("Địa chỉ Chi Tiết không được chứa dấu phẩy!")
  //     );
  //   }
  //   return Promise.resolve();
  // };

  const handleCityChange = (cityId, { label }) => {
    const selectedCity = dataCity.find((city) => city.id === cityId);
    setDistrict(selectedCity ? selectedCity.data2 : []);
    setlabelCity(label);
    form.resetFields(["district", "wards"]);
    setWards([]);
  };

  const handleDistrictChange = (districtId, { label }) => {
    const selectedProvince = dataDistrict.find(
      (province) => province.id === districtId
    );
    setLabelDistrict(label);
    setWards(selectedProvince ? selectedProvince.data3 : []);
    form.resetFields(["wards"]);
  };

  const handleWardsChange = (_, { label }) => {
    setLabelWards(label);
    console.log("🚀 ~ handleWardsChange ~ label:", label);
  };

  const optionCity = dataProvince.data.map((city) => ({
    value: city.id,
    label: city.full_name,
  }));

  const optionDistrict = dataDistrict.map((district) => ({
    value: district.id,
    label: district.full_name,
  }));

  const optionWards = dataWards.map((wards) => ({
    value: wards.id,
    label: wards.full_name,
  }));

  const handleOrderProductForm = () => {
    const dataProInCheckout = getArrayFromLS("dataProInCheckout");

    //--- lưu trong hóa đơn

    const formatDataPro =
      dataProInCheckout.length > 0 &&
      dataProInCheckout.map((product) => ({
        key: product.idProductDetails,
        url: product?.url,
        name: product?.name,
        product: {
          size: product?.properties?.size || "",
          color: product?.properties?.color || "",
        },
        price: product?.price,
        quantity: product?.quantity,
        total: product?.price * product?.quantity,
      }));

    const dataInvoice = {
      address: infoAddress,
      arrPro: formatDataPro,
      paymentMethod: selectedTitlePaymentMehod,
    };
    saveArrayLS("dataInvoice", dataInvoice);

    //-------------------------------------

    const dataPro =
      dataProInCheckout.length > 0 &&
      dataProInCheckout.map((product) => ({
        idProductDetails: product.idProductDetails,
        quantity: product.quantity,
        price: product.price,
      }));

    const data = {
      addressId: addressId,
      paymentmethoduserId: PaymentMehodId,
      productDetails: dataPro,
      callBack: () => {
        // Swal.fire({
        //   position: "center",
        //   icon: "success",
        //   title: "Đặt Hàng Thành Công !",
        //   text: "Cảm ơn quý khách hàng rất nhiều ạ 😍 ",
        //   showConfirmButton: true,
        //   showCancelButton: true,
        //   confirmButtonColor: "#3085d6",
        //   cancelButtonColor: "#70c1b3",
        //   confirmButtonText: "In hóa đơn",
        //   cancelButtonText: "Tiếp Tục Mua Sắm",
        //   allowOutsideClick: false,
        //   html: true,
        //   // timer: 500,
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     setShouldPrint(true);
        //   } else {
        //     navigate("/shopping/all");
        //   }
        // });

        showModal3();
      },
    };

    dispatch(handleOrderProduct(data));
  };

  // useEffect(() => {
  //   if (shouldPrint) {
  //     handlePrint();
  //   }
  // }, [shouldPrint]);

  // const handlePrint = () => {
  //   if (btnRef.current) {
  //     btnRef.current.click();
  //   }
  // };

  return (
    <Form onFinish={handleOrderProductForm}>
      <div>
        {/* <ReactToPrint
          trigger={() => (
            <button style={{ display: "none" }} ref={btnRef}>
              In Hóa Đơn
            </button>
          )}
          content={() => invoiceRef.current}
          onAfterPrint={() => {
            Swal.close();
            setShouldPrint(false);
            navigate("/");
          }}
        />

        <div className="hidden">
          <InvoiceComponent ref={invoiceRef} />
        </div> */}
      </div>

      <Modal
        title="Đặt Hàng Thành Công"
        open={isModalOpen3}
        onCancel={handleCancel3}
        maskClosable={false}
        closeIcon={false}
        okText="In hóa đơn"
        cancelText="Tiếp Tục Mua hàng"
        centered
      >
        <p>Đặt Hàng Thành Công...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

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
        <Form form={form} onFinish={handleAddAddressUserForn}>
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
                  onChange={handleCityChange}
                  // onSelect={(value, { label }) => console.log("HEHE", label)}
                  options={optionCity}
                />
              </Form.Item>
            </FlexCol>
            <FlexCol title="Quận Huyện" className="w-full">
              <Form.Item
                name="district"
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
                  onChange={handleDistrictChange}
                  options={optionDistrict}
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
                  onChange={handleWardsChange}
                  options={optionWards}
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
                  // { validator: validateNoComma },
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
                <Radio.Group
                  defaultValue={1}
                  value={PaymentMehodId}
                  onChange={handleChangePaymentMethod}
                >
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
            <Button
              type="submit"
              className="py-3 px-4 w-full mt-4 rounded-md"
              kind="primary"
            >
              Đặt Hàng Ngay
            </Button>
          </div>
        </div>
      </Gap>
    </Form>
  );
};

export default CheckOutPage;
