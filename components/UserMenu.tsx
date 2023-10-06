"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";

import Avatar from "./Avatar";

const UserMenu = () => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="flex">
          <div
            onClick={() => {}}
            className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 cursor-pointer transition "
          >
            Airbnb your home
          </div>
          <div
            onClick={() => {}}
            className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 cursor-pointer transition"
          >
            <FiGlobe size={18} />
          </div>
        </div>
        <div
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition "
          onClick={() => {}}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
