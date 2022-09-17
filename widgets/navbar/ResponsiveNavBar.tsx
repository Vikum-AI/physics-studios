import React, { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import NavbarMobile from "../navbar-mobile/NavbarMobile";
import SideNavBar from "../navbar-mobile/side-nav-bar/SideNavBar";
import NavBar from "./NavBar";
import IResponsiveNavBar from "./IResponsiveNavBar";

function ResponsiveNavBar({ active, onClick }: IResponsiveNavBar) {
  return (
    <>
      <div className="hidden md:block shadow-sm">
        <NavBar />
      </div>
      <div className="md:hidden">
        <div className={`${active ? "hidden" : ""}`}>
          <NavbarMobile
            onClick={onClick ? () => onClick(!active) : () => null}
          />
        </div>
        <Transition.Root as={Fragment} show={active}>
          <Transition.Child
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <SideNavBar onClick={onClick ? () => onClick(false) : () => null} />
          </Transition.Child>
        </Transition.Root>
      </div>
    </>
  );
}

export default ResponsiveNavBar;
