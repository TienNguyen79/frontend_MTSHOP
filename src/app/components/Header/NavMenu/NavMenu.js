import {
  faAddressBook,
  faChevronDown,
  faHome,
  faHouse,
  faNewspaper,
  faTShirt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactRound, Home, Newspaper, Shirt } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosClient } from "../../../axios/axiosClient";

const navLink = [
  {
    id: 1,
    name: "Trang Chủ",
    url: "/",
    icon: <Home />,
    navSub: null,
  },
  {
    id: 2,
    name: "Sản Phẩm",
    url: "/shop",
    icon: <Shirt />,
    icon2: <FontAwesomeIcon size="xs" icon={faChevronDown} />,
    navSub: "yes",
  },
  {
    id: 3,
    name: "Tin Tức",
    url: "/news",
    icon: <Newspaper />,
    navSub: null,
  },
  {
    id: 4,
    name: "Liên Hệ",
    url: "/contact",
    icon: <ContactRound />,
    navSub: null,
  },
];

const NavMenu = () => {
  const [Categories, setCategories] = useState();
  console.log("🚀 ~ HomePage ~ Categories:", Categories);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const results = await axiosClient.get("/categories");
        console.log("🚀 ~ fetchData ~ results:", results);
        setCategories(results.data.results);
      };
      fetchData();
    } catch (error) {
      console.log("🚀 ~ useEffect ~ error:", error);
    }
  }, []);

  return (
    <div className="flex items-center gap-x-8">
      {navLink.map((item) => (
        <div key={item.id} className="relative group">
          <Link to={item.url} className="flex items-center   ">
            <div className="flex items-end gap-x-2 group">
              <span className="block group-hover:text-primary group-hover:transition-all ">
                {item.icon}
              </span>
              <h1 className="text-textBold font-medium group-hover:text-primary group-hover:transition-all">
                {item.name}
              </h1>
              {item.icon2 && (
                <span className="block group-hover:text-primary group-hover:transition-all">
                  {item.icon2}
                </span>
              )}
            </div>
          </Link>
          <div className="absolute invisible transition-all opacity-0 translate-y-[160px] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ">
            <div className="flex flex-col  ">
              {item.navSub &&
                Categories?.length > 0 &&
                Categories.map((item) => (
                  <div className="relative group" key={item.id}>
                    <div className=" min-w-[180px] bg-primary text-white border-b-2 border-dotted shadow-lg py-3 px-3">
                      <Link>{item.name}</Link>
                    </div>

                    <div className="absolute  left-[calc(100%+5px)] invisible transition-all opacity-0 translate-y-4 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ">
                      {item?.children.length > 0 &&
                        item?.children?.map((child) => (
                          <div className="" key={child.id}>
                            <div className=" min-w-[180px] bg-primary text-white border-b-2 border-dotted shadow-lg py-3 px-3 ">
                              <Link>{child.name}</Link>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavMenu;
