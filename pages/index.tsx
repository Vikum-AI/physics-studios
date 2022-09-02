import type { NextPage } from "next";
import { Fragment, useState } from "react";
import Divider from "../components/divider/Divider";
import ModalComponent from "../components/modal/Modal";
import EnrollContact from "../widgets/enroll-contact/EnrollContact";
import Enroll from "../widgets/enroll-section/Enroll";
import Explain from "../widgets/explain-section/Explain";
import Footer from "../widgets/footer/Footer";
import Main from "../widgets/main-section/Main";
import NavbarMobile from "../widgets/navbar-mobile/NavbarMobile";
import NavBar from "../widgets/navbar/NavBar";
import { Transition } from "@headlessui/react";
import SideNavBar from "../widgets/navbar-mobile/side-nav-bar/SideNavBar";

const Home: NextPage = () => {
  const [active, setActive] = useState(false);

  const enrolFunc = () => {
    setActive(!active);
  };

  return (
    <div className={`${active ? "h-screen" : ""}`}>
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
        <Main />
        <Explain />
        <Enroll />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
