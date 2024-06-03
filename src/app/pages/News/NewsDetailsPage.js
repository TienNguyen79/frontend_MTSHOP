import React from "react";
import Gap from "../../components/Commom/Gap";
import FashionNewsSub from "../../modules/FashionNews/FashionNewsSub";
import Image from "../../components/Image/Image";
import CategoryNews from "../../modules/FashionNews/parts/CategoryNews";
import DateCreateNews from "../../modules/FashionNews/parts/DateCreateNews";
import { Divider } from "antd";
import Title from "../../components/Commom/Title";
import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import TextArea from "../../components/Input/TextArea";
import Button from "../../components/Button/Button";
import UserCommentItem from "../../modules/User/UserCommentItem";

const NewsDetailsPage = () => {
  const { control } = useForm();
  return (
    <div>
      <Gap>
        <div className="grid grid-cols-7 gap-x-6">
          <div className="col-span-5">
            <div className="pr-10">
              <div className="flex flex-col gap-y-4">
                <Image className="min-w-[750px] h-[500px] object-cover"></Image>
                <div className="flex items-center gap-x-6 my-2">
                  <DateCreateNews></DateCreateNews>
                  <CategoryNews className="max-w-[330px] "></CategoryNews>
                </div>
                <Divider
                  style={{
                    backgroundColor: "#F3F4F6",
                    padding: "0",
                    margin: "0",
                  }}
                ></Divider>

                <p className="content">
                  Maecenas lacinia felis nec placerat sollicitudin. Quisque
                  placerat dolor at scelerisque imperdiet. Phasellus tristique
                  felis dolor. Mauris pretium elit a dui pulvinar, in ornare
                  sapien euismod. Nullam interdum nisl ante, id feugiat quam
                  euismod commodo. Sed ultrices lectus ut iaculis rhoncus.
                  Aenean non dignissim justo, at fermentum turpis. Sed molestie,
                  ligula ut molestie ultrices, tellus ligula viverra neque,
                  malesuada consectetur diam sapien volutpat risus. Quisque eget
                  tortor lobortis, facilisis metus eu, elementum est. Nunc sit
                  amet erat quis ex convallis suscipit. ur ridiculus mus.
                </p>
                <form className="flex flex-col gap-y-4 mt-[60px]">
                  <Title
                    title="Viết bình luận của bạn"
                    className="my-4 text-[20px] font-semibold"
                  ></Title>

                  <div className="comment">
                    <div className="flex items-center gap-x-3">
                      <Input
                        control={control}
                        name="userName"
                        placeholder="Nhập Tên của bạn...."
                        className="min-w-[360px]"
                      ></Input>
                      <Input
                        control={control}
                        name="email"
                        placeholder="Nhập Email của bạn...."
                        className="min-w-[360px]"
                      ></Input>
                    </div>
                    <TextArea
                      control={control}
                      name="content"
                      placeholder="Bình luận của bạn...."
                      className="mt-5"
                    ></TextArea>
                  </div>

                  <Button
                    kind="primary"
                    className="py-3 px-4 w-[200px] rounded-md"
                  >
                    Gửi Bình Luận
                  </Button>
                </form>

                <div className="mt-10">
                  <Title
                    title="Bình Luận"
                    className="text-[20px] font-semibold"
                  ></Title>

                  <div className="flex flex-col gap-y-6 mt-10">
                    <UserCommentItem></UserCommentItem>
                    <UserCommentItem></UserCommentItem>
                    <UserCommentItem></UserCommentItem>
                    <UserCommentItem></UserCommentItem>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <FashionNewsSub></FashionNewsSub>
          </div>
        </div>
      </Gap>
    </div>
  );
};

export default NewsDetailsPage;
