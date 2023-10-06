"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <>
      <Image
        src="/images/logo.png"
        alt="Logo"
        className="hidden md:block cursor-pointer"
        height={100}
        width={100}
      />
      {/* TODO */}
      {/* <Image
        src="/images/logo1.png"
        alt="Logo"
        className="block md:hidden cursor-pointer"
        height={73}
        width={73}
      /> */}
    </>
  );
};

export default Logo;
