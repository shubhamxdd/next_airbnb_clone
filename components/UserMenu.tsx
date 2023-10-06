"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";

import Avatar from "./Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

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
          onClick={toggleOpen}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {open && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <div className="my-[6px]">
              <MenuItem
                onClick={() => {}}
                label="Sign Up"
                className="font-semibold"
              />
              <MenuItem onClick={() => {}} label="Login" className="mb-1" />
              <hr />
              {/* <div className="border-b-[1px] mb-1 mt-1"></div> */}

              <MenuItem
                onClick={() => {}}
                label="Airbnb your home"
                className="mt-1"
              />
              <MenuItem onClick={() => {}} label="Help Centre" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
