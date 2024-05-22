import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { Epath } from "../../routes/routerConfig";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ForgotSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email không hợp lệ hoặc bị thiếu.")
    .required("Email không được để trống."),
});

const ForgotPassPage = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(ForgotSchema),
    mode: "onChange",
  });

  const handleSendmail = (data) => {
    console.log("🚀 ~ handleSendmail ~ data:", data);
  };
  return (
    <div className="py-[140px] px-[300px]">
      <div className="bg-white shadow-custom2 rounded-[14px] w-[500px] mx-auto">
        <form
          onSubmit={handleSubmit(handleSendmail)}
          className="flex flex-col justify-center items-center gap-y-4 py-9 px-3"
        >
          <h1 className="text-center text-[28px] text-textBold font-semibold  ">
            Quên Mật Khẩu
          </h1>

          <p className="text-textBold text-center px-10">
            Vui lòng nhập thông tin địa chỉ email bạn muốn đặt lại mật khẩu được
            gửi tới
          </p>

          <Input
            control={control}
            name="email"
            placeholder="Nhập địa chỉ email ..."
            className="!min-w-[400px]"
            error={errors.email?.message}
          ></Input>

          <Button
            kind="primary"
            className="py-3 px-[45px] w-[400px] rounded-md transition-all hover:opacity-90"
            type="submit"
          >
            Gửi Mail !
          </Button>

          <Link to={Epath.loginPage}>
            <h1 className="hover:text-primary transition-all">
              Trở về Đăng Nhập{" "}
            </h1>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassPage;
