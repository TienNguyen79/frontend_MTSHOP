import React from "react";
import Button from "../../components/Button/Button";
import Gap from "../../components/Commom/Gap";

const HomePage = () => {
  return (
    <div>
      <Button className="py-3 px-4 rounded-md  " kind="secondary">
        Mua hàng
      </Button>

      <Gap>
        <Button className="py-3 px-4 rounded-md   " kind="primary">
          Mua hàng 2
        </Button>
      </Gap>
    </div>
  );
};

export default HomePage;
