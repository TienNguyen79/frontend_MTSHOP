import React, { useEffect, useState } from "react";
import Gap from "../components/Commom/Gap";
import { useParams } from "react-router-dom";
import ProductItem from "../modules/Product/ProductItem";
import { Divider, Radio, Space, Tree } from "antd";
import { Atom, BadgeCheck, Check, Dot, Hourglass, Minus } from "lucide-react";
import Title from "../components/Commom/Title";
import { useForm } from "react-hook-form";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDongSign } from "@fortawesome/free-solid-svg-icons";
import { LIMIT_HIGH, dataRating } from "../../utils/commom";
import AttributeProduct from "../modules/Product/parts/AttributeProduct";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllCategory } from "../../store/category/handleCategory";
import { sortByQuantityProduct } from "../../utils/functions";

const ShoppingPage = () => {
  const dispatch = useDispatch();
  const { params } = useParams();
  const { control, handleSubmit } = useForm();
  const [errorPrice, setErrorPrice] = useState("");

  const [selectedKeys, setSelectedKeys] = useState();
  console.log("🚀 ~ ShoppingPage ~ selectedKeys:", selectedKeys);

  const handleSelectCategory = (selectedKeys, info) => {
    setSelectedKeys(selectedKeys[0]);
  };

  useEffect(() => {
    dispatch(handleGetAllCategory({ limit: LIMIT_HIGH }));
  }, []);

  const dataAllCategory = useSelector(
    (state) => state.category.dataAllCategory.results
  );

  const sortDataAllCategory = sortByQuantityProduct(
    Array.isArray(dataAllCategory) ? dataAllCategory : [],
    true
  );

  const handleSubmitPrice = (data) => {
    const minPrice = parseInt(data.minPrice);
    const maxPrice = parseInt(data.maxPrice);

    if (!minPrice && !maxPrice) {
      return setErrorPrice("Vui Lòng Nhập Giá !");
    }

    if (minPrice > maxPrice) {
      return setErrorPrice("Vui Lòng khoảng giá phù hợp !");
    } else if (maxPrice < minPrice) {
      return setErrorPrice("Vui Lòng khoảng giá phù hợp !");
    } else {
      console.log("🚀 ~ handleSubmitPrice ~ data:", data);
      return setErrorPrice("");
    }
  };

  const treeDataCate =
    sortDataAllCategory.length > 0
      ? sortDataAllCategory.map((cate, index) => ({
          title: cate.name,
          key: cate.id,
          children:
            cate.children.length > 0
              ? cate.children.map((child, index) => ({
                  title: child.name,
                  key: child.id,
                  icon: ({ selected }) =>
                    selected ? (
                      <div className="mt-1">
                        {" "}
                        <Check size={"18px"} color="#70c1b3" />
                      </div>
                    ) : (
                      <Dot />
                    ),
                }))
              : [],
        }))
      : [];

  const handleChangeRate = (e) => {
    console.log("radio checked", e.target.value);
    // setValue(e.target.value);
  };
  return (
    <div>
      <Gap>
        <div className="grid grid-cols-7 gap-x-5">
          <div className="col-span-2">
            <div className="flex flex-col gap-y-8">
              <Title
                title="Bộ Lọc Tìm Kiếm "
                className="text-[24px] font-semibold "
              ></Title>
              {/* DANH MỤC */}
              <div className="flex flex-col gap-y-2">
                <div className="flex items-baseline gap-x-2 mb-2">
                  <BadgeCheck color="#70c1b3" size={"16px"} />
                  <h1 className="capitalize   text-[18px] text-primary">
                    Theo Danh mục
                  </h1>
                </div>
                <Tree
                  style={{
                    fontSize: "18px",
                    color: "#000000",
                    textTransform: "capitalize",
                    fontWeight: "500",
                  }}
                  className="filterProduct"
                  showIcon
                  defaultExpandAll
                  // expandedKeys={[1]}
                  defaultSelectedKeys={[1]}
                  //   switcherIcon={<Hourglass />}
                  autoExpandParent={true}
                  treeData={treeDataCate}
                  onSelect={handleSelectCategory}
                />
              </div>
              <Divider
                dashed
                style={{ backgroundColor: "#ccc", margin: "0" }}
              />
              {/* KHOẢNG GIÁ */}
              <div className="flex flex-col gap-y-2">
                <div className="flex items-baseline gap-x-2 mb-2">
                  <BadgeCheck color="#70c1b3" size={"16px"} />
                  <h1 className="capitalize   text-[18px] text-primary">
                    Theo Khoảng Giá
                  </h1>
                </div>

                <form
                  onSubmit={handleSubmit(handleSubmitPrice)}
                  className="flex flex-col gap-y-2"
                >
                  <div className="flex items-center gap-x-2 filterProduct">
                    <Input
                      control={control}
                      name="minPrice"
                      placeholder={` TỪ (VNĐ) 
                     
                      `}
                      type="number"
                    ></Input>
                    <Minus />
                    <Input
                      control={control}
                      name="maxPrice"
                      placeholder="ĐẾN (VNĐ)"
                      type="number"
                    ></Input>
                  </div>
                  {errorPrice && (
                    <span className="text-center block text-error">
                      {errorPrice}
                    </span>
                  )}

                  <Button
                    kind="secondary"
                    className="py-2 rounded transition hover:text-white hover:!bg-primary"
                    type="submit"
                  >
                    Áp dụng
                  </Button>
                </form>
              </div>
              <Divider
                dashed
                style={{ backgroundColor: "#ccc", margin: "0" }}
              />
              {/* ĐÁNH GIÁ */}
              <div className="flex flex-col gap-y-2">
                <div className="flex items-baseline gap-x-2 mb-2">
                  <BadgeCheck color="#70c1b3" size={"16px"} />
                  <h1 className="capitalize   text-[18px] text-primary">
                    Theo Đánh Giá
                  </h1>
                </div>
                <div>
                  <Radio.Group
                    onChange={handleChangeRate}
                    name="radiogroup"
                    defaultValue={1}
                    // value={3}
                  >
                    <Space direction="vertical">
                      {dataRating.map((item) => (
                        <Radio key={item.id} value={item.id}>
                          <div className="flex items-center gap-x-2 ">
                            {item.stars.map((star, index) => (
                              <div key={index}>{star}</div>
                            ))}
                          </div>
                        </Radio>
                      ))}
                    </Space>
                  </Radio.Group>
                </div>
              </div>
              <Divider
                dashed
                style={{ backgroundColor: "#ccc", margin: "0" }}
              />
              {/* LỌC THEO SIZE */}
              <div>
                <div className="flex flex-col gap-y-2">
                  <div className="flex items-baseline gap-x-2 mb-2">
                    <BadgeCheck color="#70c1b3" size={"16px"} />
                    <h1 className="capitalize   text-[18px] text-primary">
                      Theo Size
                    </h1>
                  </div>

                  <div className=" grid grid-cols-3 gap-3">
                    <AttributeProduct
                      className={`max-w-[80px] !py-1 !px-3  uppercase cursor-pointer `}
                      title={"XL"}
                    ></AttributeProduct>
                    <AttributeProduct
                      className={`max-w-[80px] !py-1 !px-3  uppercase cursor-pointer `}
                      title={"XL"}
                    ></AttributeProduct>
                    <AttributeProduct
                      className={`max-w-[80px] !py-1 !px-3  uppercase cursor-pointer `}
                      title={"XL"}
                    ></AttributeProduct>
                    <AttributeProduct
                      className={`max-w-[80px] !py-1 !px-3  uppercase cursor-pointer `}
                      title={"XL"}
                    ></AttributeProduct>
                    <AttributeProduct
                      className={`max-w-[80px] !py-1 !px-3  uppercase cursor-pointer `}
                      title={"XL"}
                    ></AttributeProduct>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-5 mt-10">
            <div className="grid grid-cols-3 gap-6">
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
            </div>
          </div>
        </div>
      </Gap>
    </div>
  );
};

export default ShoppingPage;
