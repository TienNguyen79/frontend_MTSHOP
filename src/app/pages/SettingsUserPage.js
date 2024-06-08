import React from "react";
import Box from "../components/Commom/Box";
import { useForm } from "react-hook-form";
import FlexCol from "../components/Commom/FlexCol";
import Input from "../components/Input/Input";
import ImageUpload from "../components/Image/ImageUpload";
import Button from "../components/Button/Button";

const SettingsUserPage = () => {
  const { control, handleSubmit } = useForm();

  const handleSettingUser = (data) => {
    console.log("🚀 ~ handleSettingUser ~ data:", data);
  };
  return (
    <form onClick={handleSubmit(handleSettingUser)}>
      <Box title="Cài Đặt Tài Khoản">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center justify-center mt-3">
            <ImageUpload className="w-[200px] h-[200px] rounded-full"></ImageUpload>
          </div>
          <FlexCol title="Tên " className="w-full">
            <Input
              control={control}
              name="userName"
              placeholder="Tên của bạn..."
            ></Input>
          </FlexCol>
          <FlexCol title="Email " className="w-full">
            <Input
              control={control}
              name="email"
              placeholder="Email của bạn..."
            ></Input>
          </FlexCol>
          <FlexCol title="Số điện thoại " className="w-full">
            <Input
              control={control}
              name="phoneNumber"
              placeholder="Số diện thoại của bạn..."
            ></Input>
          </FlexCol>

          <FlexCol title="Mật Khẩu" className="w-full">
            <Input
              control={control}
              name="password"
              placeholder="Mật Khẩu của bạn..."
            ></Input>
          </FlexCol>

          <Button
            className="py-3 px-4 rounded-lg overflow-hidden"
            kind="primary"
            type="submit"
          >
            Lưu Thay Đổi
          </Button>
        </div>
      </Box>
    </form>
  );
};

export default SettingsUserPage;
