import React from "react";
import { Link } from "react-router-dom";
import Image from "../Image/Image";

const PopUpSearch = ({ data, loading, text, setShow3 }) => {
  return (
    <div className="absolute top-full left-0 max-w-[500px] z-50 bg-white shadow-lg w-full mt-2 rounded-md py-4 max-h-[319px] overflow-y-auto  ">
      <div>
        <div className="px-3 flex items-center text-[15px] font-normal text-gray5">
          {loading && <Image url="/loadingP2.gif" className="h-[30px]" />}

          {data.length > 0 ? (
            <span>Result for : '{text}'</span>
          ) : (
            <span>Not Found : '{text}'</span>
          )}
        </div>
      </div>
      {!loading &&
        data?.length > 0 &&
        data.map((item) => (
          <Link
            key={item.id}
            className="flex items-center gap-x-3 py-2 px-3 cursor-pointer hover:bg-gray-100"
            to={`product/${item?.id}`}
            onClick={() => setShow3(false)}
          >
            <Image
              url={item?.image[0]?.url || null}
              className="w-[50px] h-[50px] rounded-full object-cover overflow-hidden "
              alt=""
            />
            <span className="block text-gray8 font-normal text-[16px] whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[300px] ">
              {item?.name}
            </span>
          </Link>
        ))}
    </div>
  );
};

export default PopUpSearch;
