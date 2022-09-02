import Image from "next/image";
import React from "react";
import NavList from "../../../components/navlist/NavList";
import LogoLight from "../../../Assets/logo-light.png";
import Button from "../../../components/button/Button";
import { ImCross } from "react-icons/im";
import ISideNavBar from "./ISideNavBar";
import Footer from "../../footer/Footer";

function SideNavBar({ onClick }: ISideNavBar) {
  return (
    <div className="flex flex-col bg-white w-full h-screen shadow-lg z-50">
      <div className="flex justify-between mx-8 items-center">
        <div className="w-24 h-fit m-5">
          <Image src={LogoLight} alt="logo" />
        </div>
        <div>
          <Button Icon={ImCross} extras="p-2" onClick={onClick} />
        </div>
      </div>
      <div className="h-full">
        <NavList extras="flex-col h-[70%] text-xl font-medium ml-8 w-[80%] mt-10" />
      </div>
      <Footer />
    </div>
  );
}

export default SideNavBar;
