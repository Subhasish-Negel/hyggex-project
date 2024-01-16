import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="px-[102px] pt-[30px] flex justify-between ">
      <Image
        className="h-[40px] w-[190]"
        src="/logo.svg"
        alt="Logo"
        height={200}
        width={200}
      ></Image>
      <div className="flex">
        <ul className="flex space-x-8 my-[13px] font-medium">
          <li>Home</li>
          <li>Flashcard</li>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>
        <button className="ml-[32px] px-[40px] py-[13px]  bg-gradient-to-b from-[#06286E] to-[#164EC0] text-white rounded-3xl font-semibold">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
