import type { NextPage } from "next";
import { useState } from "react";
import Divider from "../components/divider/Divider";
import ModalComponent from "../components/modal/Modal";
import EnrollContact from "../widgets/enroll-contact/EnrollContact";
import Enroll from "../widgets/enroll-section/Enroll";
import Explain from "../widgets/explain-section/Explain";
import Footer from "../widgets/footer/Footer";
import Main from "../widgets/main-section/Main";
import NavbarMobile from "../widgets/navbar-mobile/NavbarMobile";
import NavBar from "../widgets/navbar/NavBar";

const Home: NextPage = () => {
  const [active, setActive] = useState(false);

  const enrolFunc = () => {
    setActive(!active);
  };

  return (
    <div className="w-[99vw]">
      <div className="hidden md:block shadow-sm">
        <NavBar />
      </div>
      <div className="md:hidden">
        <NavbarMobile />
      </div>
      <Divider />
      <Main />
      <Explain />
      <Enroll />
      {/* <EnrollContact /> */}
      <Footer />
      {/* <AffixComp /> */}
    </div>
  );
};

export default Home;
