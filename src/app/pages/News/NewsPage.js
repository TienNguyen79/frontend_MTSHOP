import React from "react";
import Gap from "../../components/Commom/Gap";
import FashionNewsSub from "../../modules/FashionNews/FashionNewsSub";
import FashionNewsItem from "../../modules/FashionNews/FashionNewsItem";

const NewsPage = () => {
  return (
    <div>
      <Gap>
        <div className="grid grid-cols-7 gap-x-6">
          <div className="col-span-2">
            <FashionNewsSub></FashionNewsSub>
          </div>
          <div className="col-span-5">
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              <FashionNewsItem />
              <FashionNewsItem />
              <FashionNewsItem />
              <FashionNewsItem />
            </div>
          </div>
        </div>
      </Gap>
    </div>
  );
};

export default NewsPage;
