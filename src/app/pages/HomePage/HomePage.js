import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Gap from "../../components/Commom/Gap";
import { axiosClient } from "../../axios/axiosClient";
import { useDispatch, useSelector } from "react-redux";
import { handleGetCurrentUser } from "../../../store/auth/handleAuth";

const HomePage = () => {
  // const [product, setProduct] = useState();
  // console.log("🚀 ~ HomePage ~ product:", product);

  // useEffect(() => {
  //   try {
  //     const fetchData = async () => {
  //       const results = await axiosClient.get("/product");
  //       console.log("🚀 ~ fetchData ~ results:", results);
  //       setProduct(results.data.results);
  //     };
  //     fetchData();
  //   } catch (error) {
  //     console.log("🚀 ~ useEffect ~ error:", error);
  //   }
  // }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetCurrentUser());
  }, [dispatch]);

  const { dataCurrentUser } = useSelector((state) => state.auth);
  console.log("🚀 ~ HomePage ~ dataCurrentUser:", dataCurrentUser);
  return (
    <div>
      {/* <Button className="py-3 px-4 rounded-md  " kind="secondary">
        Mua hàng
      </Button> */}

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

      <Gap>
        <Button className="py-3 px-4 rounded-md   " kind="primary">
          Mua hàng 2
        </Button>
      </Gap>
    </div>
  );
};

export default HomePage;
