import React, { Fragment, useState } from "react";
import Divider from "../components/divider/Divider";
import AboutHeader from "../widgets/about-header/AboutHeader";
import Footer from "../widgets/footer/Footer";
import NavbarMobile from "../widgets/navbar-mobile/NavbarMobile";
import NavBar from "../widgets/navbar/NavBar";
import { Transition } from "@headlessui/react";
import SideNavBar from "../widgets/navbar-mobile/side-nav-bar/SideNavBar";

export default function AboutPage() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className="hidden md:block shadow-sm">
        <NavBar />
      </div>
      <div className="md:hidden">
        <div className={`${active ? "hidden" : ""}`}>
          <NavbarMobile onClick={() => setActive(!active)} />
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
            <SideNavBar onClick={() => setActive(false)} />
          </Transition.Child>
        </Transition.Root>
      </div>
      <div className={`${active ? "hidden" : ""}`}>
        <Divider />
        <AboutHeader />
        <Footer />
      </div>
    </div>
  );
}
