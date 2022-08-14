import Image from "next/image";
import React from "react";
import NavList from "../../components/navlist/NavList";
import LogoLight from "../../Assets/logo-light.png";
import Burger from "../../components/burger/Burger";
import Button from "../../components/button/Button";

export default function NavbarMobile() {
  return (
    <div className="flex justify-between h-[7rem]">
      <div className="w-[5.7rem] mx-4 flex items-center">
        <Image src={LogoLight} alt="logo" />
      </div>
      <div className="flex">
        <div className="h-full flex items-center mx-4">
          <Button
            label="Enroll Now"
            extras="bg-red-200 text-red-600 p-2 hover:bg-red-300 hover:text-red-600"
          />
        </div>
        <div className="h-full flex items-center mx-6">
          <Burger />
        </div>
      </div>
    </div>
  );
}
