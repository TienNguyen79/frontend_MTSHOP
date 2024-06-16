import React from "react";
import Gap from "../components/Commom/Gap";
import { OctagonX } from "lucide-react";
import Button from "../components/Button/Button";

const PaymentErrorPage = () => {
  return (
    <Gap>
      <div className="flex items-center justify-center my-5 h-full">
        <div className="flex flex-col items-center gap-y-2">
          <OctagonX size={"60px"} color="rgb(247,0,0)" />
          <h1 className="font-semibold text-[35px] text-error">
            ĐƠN HÀNG ĐÃ BỊ HỦY
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button kind="primary" href="/" className="rounded-md">
          Quay Về Trang Chủ
        </Button>
      </div>
    </Gap>
  );
};

export default PaymentErrorPage;
