import Image from "next/image";
import React from "react";
import NavList from "../../components/navlist/NavList";
import LogoLight from "../../Assets/logo-dark.png";
import { BsFacebook } from "react-icons/bs";
import Socials from "../../components/socials/Socials";

// bg-[#121212]

export default function Footer() {
  return (
    <div className="bg-[#1b1b1b] py-20 mt-6 flex justify-around text-gray-300">
      <div className="h-full">
        <div className="flex items-center h-full">
          <div className="w-[5.7rem]">
            <Image src={LogoLight} alt="logo" />
          </div>
          <div>
            <h1 className="text-xl ml-4">Physics Studios</h1>
          </div>
        </div>
        <div className="w-[80%] ml-4">
          <p> 767 5th Ave, New York, NY 10153, United States</p>
        </div>
      </div>
      <div>
        <h1 className="ml-2 mb-4">Pages</h1>
        <NavList extras="flex-col" />
      </div>
      <div>
        <h1 className="ml-2 mb-4">Careers</h1>
        <NavList extras="flex-col" />
      </div>
      <div>
        <h1 className="ml-2 mb-4">Contact</h1>
        <NavList extras="flex-col" />
      </div>
      <div>
        <Socials />
      </div>
    </div>
  );
}
