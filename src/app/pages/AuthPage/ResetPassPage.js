import React, { Fragment, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { Epath } from "../../routes/routerConfig";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ResetPassSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Mật Khẩu phải có ít nhất 6 ký tự.")
    .max(30, "Mật Khẩu không được vượt quá 30 ký tự.")
    .required("Mật Khẩu không được để trống."),
});

const ResetPassPage = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(ResetPassSchema),
    mode: "onChange",
  });

  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(countdown); // Dừng đếm ngược khi số giây bằng 0
      }
    }, 1000);

    return () => {
      clearInterval(countdown); // Hủy đếm ngược khi component bị unmounted
    };
  }, [seconds]);

  const handleResetPass = (data) => {
    console.log("🚀 ~ handleResetPassl ~ data:", data);
  };
  return (
    <div className="py-[140px] px-[300px]">
      <div className="bg-white shadow-custom2 rounded-[14px] w-[500px] mx-auto">
        <form
          onSubmit={handleSubmit(handleResetPass)}
          className="flex flex-col justify-center items-center gap-y-4 py-9 px-3"
        >
          <h1 className="text-center text-[28px] text-textBold font-semibold  ">
            Đặt Lại Mật Khẩu
          </h1>

          <p className="text-textBold text-center px-10">
            Vui lòng nhập mật khẩu mới khi token còn hiệu lực
          </p>
          <div className="flex items-center gap-x-1 text-gray-700  text-[15px]  justify-center font-medium">
            {seconds > 0 ? (
              <Fragment>
                <span>Token có hiệu lực trong </span>
                <span className="block text-primary ">{seconds}s</span>
              </Fragment>
            ) : (
              <span className="text-error  ">Token đã hết hạn</span>
            )}
          </div>
          <Input
            control={control}
            name="email"
            placeholder="Nhập địa chỉ email ..."
            className="!min-w-[400px]"
          ></Input>

          <Input
            control={control}
            name="password"
            placeholder="Nhập Mật Khẩu Mới ..."
            className="!min-w-[400px]"
            error={errors.password?.message}
          ></Input>

          <Button
            kind="primary"
            className="py-3 px-[45px] w-[400px] rounded-md transition-all hover:opacity-90"
            type="submit"
          >
            Thay Đổi
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassPage;
