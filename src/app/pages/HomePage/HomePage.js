import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Gap from "../../components/Commom/Gap";
import { axiosClient } from "../../axios/axiosClient";
import { useDispatch, useSelector } from "react-redux";
import { handleGetCurrentUser } from "../../../store/user/handleUser";
import { generateStars } from "../../../utils/functions";
import ProductItem from "../../modules/Product/ProductItem";
import ProductDetails from "../../modules/Product/ProductDetails";
import ProductModal from "../../modules/Product/ProductModal";
const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <ProductModal open={openModal} setOpen={setOpenModal}></ProductModal>

      <Gap>
        <Button className="py-3 px-4 rounded-md   " kind="primary">
          Mua hàng 2
        </Button>
      </Gap>

      <Gap>
        <div className="grid grid-cols-4 gap-x-5 gap-y-10">
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
        </div>
      </Gap>

      <Gap>
        <div className="mt-10">
          <ProductDetails></ProductDetails>
        </div>
      </Gap>

      <Gap>
        <Button
          className="py-3 px-4 rounded-md "
          type="primary"
          onClick={() => setOpenModal(true)}
          kind="primary"
        >
          Open Modal
        </Button>
      </Gap>

      <Gap>
        <Button className="py-3 px-4 rounded-md   " kind="primary">
          Mua hàng 2
        </Button>
      </Gap>

      <Gap>
        <Button className="py-3 px-4 rounded-md   " kind="primary">
          Mua hàng 2
        </Button>
      </Gap>

      <Gap>
        <Button className="py-3 px-4 rounded-md   " kind="primary">
          Mua hàng 2
        </Button>
      </Gap>
    </div>
  );
};

export default HomePage;
