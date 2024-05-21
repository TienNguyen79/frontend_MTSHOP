import React from "react";

const Image = ({ url = "/imgDefault.jpg", className = "" }) => {
  return (
    <div className={`${className}`}>
      <img src={url} className="w-full h-full object-cover" alt="logo" />
    </div>
  );
};

export default Image;
