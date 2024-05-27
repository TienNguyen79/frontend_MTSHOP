import React from "react";
import PolicyFeatureItem from "./PolicyFeatureItem";
const dataUtil = [
  {
    id: 1,
    url: "/policyFeature/car.png",
    title: "Free Shipping",
    contentDesc: "Free shipping with discount",
  },
  {
    id: 2,
    url: "/policyFeature/headphone.png",
    title: "Great Support 24/7",
    contentDesc: "Instant access to Contact",
  },
  {
    id: 3,
    url: "/policyFeature/wallet.png",
    title: "100% Sucure Payment",
    contentDesc: "We ensure your money is save",
  },
  {
    id: 4,
    url: "/policyFeature/box.png",
    title: "Money-Back Guarantee",
    contentDesc: "30 days money-back",
  },
];

const PolicyFeature = () => {
  return (
    <div className="px-5 md:px-[30px]   grid grid-cols-1  md:grid-cols-4 lg:grid-cols-4 gap-x-6 relative ">
      {dataUtil.length > 0 &&
        dataUtil.map((data) => (
          <PolicyFeatureItem data={data} key={data.id}></PolicyFeatureItem>
        ))}
    </div>
  );
};

export default PolicyFeature;
