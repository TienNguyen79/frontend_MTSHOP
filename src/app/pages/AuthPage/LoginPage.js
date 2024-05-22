import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Epath } from "../../routes/routerConfig";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email không hợp lệ hoặc bị thiếu.")
    .required("Email không được để trống."),
  password: yup
    .string()
    .min(6, "Mật Khẩu phải có ít nhất 6 ký tự.")
    .max(30, "Mật Khẩu không được vượt quá 30 ký tự.")
    .required("Mật Khẩu không được để trống."),
});

const LoginPage = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: "onChange",
  });

  const handleLoginForm = (data) => {
    console.log("🚀 ~ handleLoginForm ~ data:", data);
  };
  return (
    <div className="py-[140px] px-[300px] ">
      <div className="bg-white shadow-custom2 rounded-[14px]">
        <div className="flex justify-between">
          <div className="flex-1 bg-primary min-h-[450px] w-[400px] rounded-custom2 relative">
            <div className="absolute top-2/4 -translate-y-2/4 flex flex-col items-center gap-y-4">
              <h1 className="text-center text-[28px] text-white font-semibold">
                Xin Chào Bạn !
              </h1>
              <p className="text-white text-center px-5">
                Hãy đăng kí để trải nghiệm những điều tuyệt vời mà trang web của
                chúng tôi mang lại
              </p>
              <Button
                kind="ghost"
                className="py-3 px-[45px] w-[180px] rounded-md transition-all hover:bg-white hover:text-primary"
                href={Epath.register}
              >
                Đăng Ký
              </Button>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(handleLoginForm)}
            className="py-10 px-6 min-w-[400px] flex-1"
          >
            <h1 className="text-center text-[28px] text-textBold font-semibold  ">
              Đăng nhập
            </h1>

            <div className="flex flex-col gap-y-5 py-6 px-10">
              <Input
                control={control}
                name="email"
                placeholder="Nhập Email ...."
                error={errors.email?.message}
              ></Input>
              <Input
                control={control}
                name="password"
                placeholder="Nhập Mật Khẩu ...."
                error={errors.password?.message}
              ></Input>
              <Link to={Epath.forgotPass} className="text-center">
                <span className=" text-[#ccc] hover:text-primary transition-all inline-block">
                  Quên mật khẩu ?
                </span>
              </Link>
            </div>

            <div className="w-full flex items-center justify-center">
              <Button
                kind="primary"
                className="py-3 px-[45px] w-[180px] rounded-md transition-all hover:opacity-90 "
                type="submit"
              >
                Đăng Nhập
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
