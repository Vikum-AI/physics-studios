import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import NavList from "../../components/navlist/NavList";
import LogoLight from "../../Assets/logo-light.png";
import Burger from "../../components/burger/Burger";
import Button from "../../components/button/Button";
import { Transition } from "@headlessui/react";
import SideNavBar from "./side-nav-bar/SideNavBar";
import INavMobile from "./INavMobile";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";

export default function NavbarMobile({ onClick }: INavMobile) {
  const [active, setActive] = useState(false);

  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [pathName]);

  return (
    <div className="flex justify-between h-[7rem] w-full">
      <div className="w-[5.7rem] mx-4 flex items-center">
        <Image src={LogoLight} alt="logo" />
      </div>
      <div className="flex">
        <div className="h-full flex items-center mx-4">
          {pathName === "/" ? (
            <AnchorLink href="#enroll">
              <Button
                label="Enroll Now"
                extras="bg-red-200 text-red-600 p-2 hover:bg-red-300 hover:text-red-600"
              />
            </AnchorLink>
          ) : (
            <>
              <Link href="/">
                <Button
                  label="Enroll Now"
                  extras="bg-red-200 text-red-600 p-2 hover:bg-red-300 hover:text-red-600"
                />
              </Link>
            </>
          )}
        </div>
        <div
          className="h-full flex items-center mx-6 cursor-pointer"
          onClick={onClick}
        >
          <Burger />
        </div>
      </div>
      {/* <Transition.Root as={Fragment} show={active}>
        <Transition.Child
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <SideNavBar />
        </Transition.Child>
      </Transition.Root> */}
    </div>
  );
}
