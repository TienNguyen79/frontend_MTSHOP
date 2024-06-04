import React from "react";
import Gap from "../components/Commom/Gap";
import Box from "../components/Commom/Box";
import Image from "../components/Image/Image";
import NameUser from "../modules/User/parts/NameUser";
import LabelRedirect from "../components/Label/LabelRedirect";
import ContentUser from "../modules/User/parts/ContentUser";

const UserDashboardPage = () => {
  return (
    <div>
      <div className="flex items-center gap-x-4">
        <Box isShowheader={false} className="flex-1">
          <div className="flex items-center gap-x-4 justify-center">
            <div className="flex   justify-center items-center flex-col gap-y-4">
              <Image className="w-[160px] h-[160px] rounded-full overflow-hidden"></Image>
              <NameUser name="Tiến Nguyễn"></NameUser>
              <LabelRedirect title="Chỉnh sửa thông tin "></LabelRedirect>
            </div>
          </div>
        </Box>

        <Box isShowheader={false} className="flex-1">
          <div className="flex flex-col  py-2">
            <h1 className="text-text3 uppercase text-[18px]">
              Địa chỉ giao hàng
            </h1>
            <div className="flex justify-center items-start flex-col gap-y-3 mt-2">
              <NameUser name="Tiến Nguyễn"></NameUser>
              <ContentUser>tiennguyen@gmail.com</ContentUser>
              <ContentUser className="!text-text1 text-[16px]">
                Nguyễn Trãi, Quận Thanh Xuân , Thành Phố Hà Nội
              </ContentUser>
              <ContentUser className="!text-text1 text-[16px]">
                09199 888 88
              </ContentUser>

              <LabelRedirect title="Chỉnh sửa thông tin "></LabelRedirect>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default UserDashboardPage;
