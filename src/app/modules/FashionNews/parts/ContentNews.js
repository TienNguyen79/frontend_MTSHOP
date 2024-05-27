import React from "react";

const ContentNews = ({ children, className = "" }) => {
  return (
    <p className={`text-text1 font-normal multiline-ellipsis ${className}`}>
      {children ||
        "Xem ngay các phong cách thời trang đang được ưa chuộng và dẫn đầu xu hướng trong năm 2024 và một số gợi ý, hướng dẫn chọn style phù hợp"}
    </p>
  );
};

export default ContentNews;
