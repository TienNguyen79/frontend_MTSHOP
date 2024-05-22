import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const RegisterPage = () => {
  const { control } = useForm();
  return (
    <div className="py-[140px] px-[500px] ">
      <div className="bg-white shadow-custom2 rounded-[14px]">
        <div className="flex justify-between">
          <div className="py-10 px-6 w-[400px] flex-1">
            <h1 className="text-center text-[28px] text-textBold font-semibold">
              Đăng Ký
            </h1>

            <div className="flex flex-col gap-y-5 py-6 px-6">
              <Input
                control={control}
                name="userName"
                placeholder="Nhập Tên ...."
                className=""
              ></Input>
              <Input
                control={control}
                name="email"
                placeholder="Nhập Email ...."
              ></Input>
              <Input
                control={control}
                name="password"
                placeholder="Nhập Mật Khẩu ...."
              ></Input>
              <Input
                control={control}
                name="phoneNumber"
                placeholder="Nhập Số Điện Thoại ...."
              ></Input>
            </div>

            <div className="w-full flex items-center justify-center">
              <Button
                kind="primary"
                className="py-3 px-[45px] w-[180px] rounded-md "
              >
                Đăng Ký
              </Button>
            </div>
          </div>

          <div className="flex-1 bg-primary min-h-[450px] w-[400px] rounded-custom relative">
            <div className="absolute flex flex-col gap-y-4">
              <h1 className="text-center text-[28px] text-white font-semibold">
                Chào mừng trở lại !
              </h1>
              <p>
                Nhập Thông tin chi tiết của bạn để sử dụng các chức năng nổi bật
                nhất của chúng tôi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
