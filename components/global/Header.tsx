import React from "react";
import { IconType } from "react-icons";

import { GoHome } from "react-icons/go";
import { FiBriefcase } from "react-icons/fi";
import { FiTool } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa6";

export interface MenuItem {
  icon: IconType; // React Icon component
  title: string;
  link: string;
}

const menuItems: MenuItem[] = [
  {
    icon: GoHome,
    title: "Home",
    link: "/",
  },
  {
    icon: FaRegFolder,
    title: "Experiences",
    link: "/",
  },
  {
    icon: FiBriefcase,
    title: "Projects",
    link: "/",
  },
  {
    icon: FiTool,
    title: "Tools",
    link: "/",
  },
  {
    icon: FaRegEdit,
    title: "Contact",
    link: "/",
  },
];

const Header = () => {
  return (
    <div className="sticky left-0 right-0 top-0 z-10 text-white mx-auto container flex justify-center items-center p-10">
      <ul className="flex backdrop-blur-sm bg-white/30 rounded-2xl justify-center items-center py-4 px-14 gap-x-4">
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center justify-center">
            <a
              href={item.link}
              style={{ textDecoration: "none", color: "inherit" }}
              className="text-inherit no-underline relative group"
            >
              <item.icon className="w-5 h-5" />
              <span className="absolute text-[10px] text-center text-white top-12 left-[-10px] font-light px-1 p-0 bg-white/30 rounded-md hidden group-hover:block transition-all delay-100">
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
