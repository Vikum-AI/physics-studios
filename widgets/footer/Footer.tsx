import Image from "next/image";
import React from "react";
import NavList from "../../components/navlist/NavList";
import LogoLight from "../../Assets/logo-dark.png";
import { BsFacebook } from "react-icons/bs";
import Socials from "../../components/socials/Socials";
import Link from "next/link";

// bg-[#121212]

export default function Footer() {
  return (
    <div className="bg-[#1b1b1b] py-20 mt-6 flex justify-around text-gray-300">
      <div className="h-full">
        <div className="flex items-center h-full">
          <div className="w-[5.7rem]">
            <Image src={LogoLight} alt="logo" />
          </div>
          <div className="hidden sm:flex">
            <h1 className="text-xl ml-4">Physics Studios</h1>
          </div>
        </div>
        <div className="w-[80%] ml-4 hidden sm:flex">
          <p>
            {" "}
            34, Walauwatte Road <br /> Nugegoda <br /> Colombo <br /> Sri Lanka{" "}
          </p>
        </div>
        <div className="m-4 text-slate-400">
          Developed and maintained by{" "}
          <span className="underline underline-offset-2">
            <Link href="mailto:vikumdabare@gmail.com" className="underline">
              Vikum Dabare
            </Link>
          </span>
        </div>
      </div>
      <div className="hidden md:flex flex-col">
        <h1 className="ml-2 mb-4">Pages</h1>
        <NavList extras="flex-col" />
      </div>
      <div className="hidden md:flex flex-col">
        <h1 className="ml-2 mb-4">Careers</h1>
        <ul>
          <li className="p-2 text-md hover:text-red-600 rounded-md transition duration-300">
            <Link href="/">Join Us</Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex flex-col">
        <h1 className="ml-2 mb-4">Contact</h1>
        <ul>
          <li className="p-2 text-md hover:text-red-600 rounded-md transition duration-300">
            <Link href="/">Email</Link>
          </li>
        </ul>
      </div>
      <div>
        <Socials />
      </div>
    </div>
  );
}
