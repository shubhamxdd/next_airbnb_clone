"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";

import Avatar from "./Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import useRentModal from "@/hooks/useRentModal";

interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const [open, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) return loginModal.onOpen();
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="flex">
          <div
            onClick={onRent}
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
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {open && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <div className="my-[6px]">
              {currentUser ? (
                <>
                  <MenuItem onClick={() => {}} label="My trips" />
                  <MenuItem onClick={() => {}} label="My favourite" />
                  <MenuItem onClick={() => {}} label="My reservations" />
                  <MenuItem onClick={() => {}} label="My properties" />
                  <MenuItem onClick={rentModal.onOpen} label="Airbnb your home" />
                  <MenuItem
                    onClick={() => {}}
                    label="Help Centre"
                    className="mb-1"
                  />
                  <hr />
                  <MenuItem
                    onClick={() => signOut()}
                    label="Logout"
                    className="mt-1"
                  />
                </>
              ) : (
                <>
                  <MenuItem
                    onClick={registerModal.onOpen}
                    label="Sign Up"
                    className="font-semibold"
                  />
                  <MenuItem
                    onClick={loginModal.onOpen}
                    label="Login"
                    className="mb-1"
                  />
                  <hr />
                  <MenuItem
                    onClick={() => {}}
                    label="Help Centre"
                    className="mt-1"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
