import React, { Fragment, useEffect, useRef, useState } from "react";
import Image from "../Image/Image";
import NavMenu from "./NavMenu/NavMenu";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import useClickOutSide from "../../../utils/customHook/useClickOutSide";
import Button from "../Button/Button";
import { CircleUserRound, ShoppingCart } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Epath } from "../../routes/routerConfig";
import { useDispatch, useSelector } from "react-redux";
import { handleGetCurrentUser } from "../../../store/user/handleUser";
import { getTokenFromLocalStorage } from "../../../utils/localStorage";
import PopupMe from "../Popup/PopupMe";

const Header = () => {
  const { control } = useForm();
  const dispatch = useDispatch();

  const location = useLocation();
  const [openPopupAuth, setOpenPopupAuth] = useState(false);
  const [openPopupMe, setOpenPopupMe] = useState(false);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const openerRef = useRef(null);
  const openerRef2 = useRef(null);
  const handleOutsideClick = () => {
    setOpenPopupAuth(false);
  };
  const handleOutsideClick2 = () => {
    setOpenPopupMe(false);
  };

  useClickOutSide(openerRef, ref, handleOutsideClick);
  useClickOutSide(openerRef2, ref2, handleOutsideClick2);

  // Listen for route changes
  useEffect(() => {
    setOpenPopupAuth(false); // Close popup on route change
  }, [location]);

  const { dataCurrentUser } = useSelector((state) => state.user);
  return (
    <div className="py-3 px-12 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Image
            url="/logo3.png"
            className=" w-[120px] h-[80px] rounded-lg overflow-hidden"
          ></Image>
          <NavMenu></NavMenu>
        </div>
        <div className="flex items-center gap-x-6">
          <div className="mr-7">
            <Input
              control={control}
              placeholder="Tìm kiếm sản phẩm..."
              name="search"
              className="!w-[350px]"
              kind="search"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Input>
          </div>

          <div className="relative">
            {dataCurrentUser ? (
              <Fragment>
                <div ref={ref2} onClick={() => setOpenPopupMe(!openPopupMe)}>
                  <Image
                    className="w-[35px] h-[35px] rounded-full overflow-hidden  border-primary border-[2px] cursor-pointer"
                    url={dataCurrentUser?.avatar}
                  ></Image>
                </div>
                {openPopupMe && (
                  <div ref={openerRef2}>
                    <PopupMe></PopupMe>
                  </div>
                )}
              </Fragment>
            ) : (
              <Fragment>
                <span
                  className="cursor-pointer"
                  ref={ref}
                  onClick={() => setOpenPopupAuth(!openPopupAuth)}
                >
                  <CircleUserRound size="30px" />
                </span>
                {openPopupAuth && (
                  <div
                    ref={openerRef}
                    className="absolute z-10 bg-white right-0 w-[250px] top-[60px] py-[20px]  px-[20px] border border-solid rounded-xl  shadow-lg flex flex-col gap-y-3"
                  >
                    <Button
                      href={Epath.register}
                      className="w-full bg-primary text-white rounded-md"
                    >
                      Đăng kí
                    </Button>
                    <Button
                      href={Epath.loginPage}
                      className="w-full border border-solid border-primary text-primary rounded-md "
                    >
                      Đăng nhập
                    </Button>
                  </div>
                )}
              </Fragment>
            )}
          </div>

          <span className="cursor-pointer relative ">
            <ShoppingCart size="30px" />

            <div className="absolute w-[25px] h-[25px] bottom-5 left-6 flex justify-center items-center rounded-full bg-primary text-[#FFF]">
              1
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
