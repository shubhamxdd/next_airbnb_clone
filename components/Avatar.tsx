"use client";

import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar = ({ src }: AvatarProps) => {
  return (
    <Image
      src={src || "/images/avatar.svg"}
      alt="Avatar"
      className="rounded-full"
      height={30}
      width={30}
    />
  );
};

export default Avatar;
