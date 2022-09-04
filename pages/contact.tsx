import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

import Header from "../components/3dheader/Header";
import Divider from "../components/divider/Divider";
import ContactWidget from "../widgets/contact-widget/ContactWidget";
import Footer from "../widgets/footer/Footer";
import NavbarMobile from "../widgets/navbar-mobile/NavbarMobile";
import SideNavBar from "../widgets/navbar-mobile/side-nav-bar/SideNavBar";
import NavBar from "../widgets/navbar/NavBar";

export default function Contact() {
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
      <Divider />
      <div className={`${active ? "hidden" : ""}`}>
        <Header label="Get in touch" />
        <ContactWidget />
        <div className="relative top-[65vh] lg:top-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
