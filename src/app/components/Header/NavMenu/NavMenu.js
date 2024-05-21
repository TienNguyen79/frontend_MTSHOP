import {
  faAddressBook,
  faChevronDown,
  faHome,
  faHouse,
  faNewspaper,
  faTShirt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const navLink = [
  {
    id: 1,
    name: "Trang Chủ",
    url: "/",
    icon: <FontAwesomeIcon size="lg" icon={faHouse} />,
    navSub: null,
  },
  {
    id: 2,
    name: "Sản Phẩm",
    url: "/shop",
    icon: <FontAwesomeIcon size="lg" icon={faTShirt} />,
    icon2: <FontAwesomeIcon size="xs" icon={faChevronDown} />,
    navSub: null,
  },
  {
    id: 3,
    name: "Tin Tức",
    url: "/news",
    icon: <FontAwesomeIcon size="lg" icon={faNewspaper} />,
    navSub: null,
  },
  {
    id: 4,
    name: "Liên Hệ",
    url: "/contact",
    icon: <FontAwesomeIcon size="lg" icon={faAddressBook} />,
    navSub: null,
  },
];

const NavMenu = () => {
  return (
    <div className="flex items-center gap-x-8">
      {navLink.map((item) => (
        <Link to={item.url} key={item.id} className="flex items-center  ">
          <div className="flex items-end gap-x-2 group">
            <span className="block group-hover:text-primary group-hover:transition-all ">
              {item.icon}
            </span>
            <h1 className="text-textBold group-hover:text-primary group-hover:transition-all">
              {item.name}
            </h1>
            {item.icon2 && (
              <span className="block group-hover:text-primary group-hover:transition-all">
                {item.icon2}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
