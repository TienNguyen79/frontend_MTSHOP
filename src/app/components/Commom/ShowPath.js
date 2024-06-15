import React, { useEffect, useState } from "react";

const ShowPath = () => {
  // const [nameUrl, setNameUrl] = useState("");
  // console.log("🚀 ~ LayoutDetails ~ nameUrl:", nameUrl);

  // useEffect(() => {
  //   // Lấy URL hiện tại
  //   const currentURL = window.location.href;
  //   // Sử dụng đối tượng URL để trích xuất phần "login"
  //   const url = new URL(currentURL);
  //   const Part1 = url.pathname.split("/")[1]; // Lấy phần đầu tiên của đường dẫn
  //   setNameUrl(Part1);
  // }, []);
  return (
    // <h1 className=" text-center pt-10 text-text3 font-normal italic capitalize">
    //   Trang Chủ / {nameUrl}
    // </h1>
    <div className="  py-6 opacity-60">
      <p className="text-center block text-text1 ">
        MTSHOP - Thời trang đẳng cấp, phong cách vượt thời gian !
      </p>
    </div>
  );
};

export default ShowPath;
