"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      src="/images/avatar.svg"
      alt="Avatar"
      className="rounded-full"
      height={30}
      width={30}
    />
  );
};

export default Avatar;
