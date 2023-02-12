import { NextPage } from "next";
import React, { useState } from "react";
import Divider from "../components/divider/Divider";
import AboutHeader from "../widgets/about-header/AboutHeader";
import Footer from "../widgets/footer/Footer";
import ResponsiveNavBar from "../widgets/navbar/ResponsiveNavBar";

const AboutPage: NextPage = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <ResponsiveNavBar
        active={active}
        onClick={(state: boolean) => setActive(state)}
      />
      <div className={`${active ? "hidden" : ""}`}>
        <AboutHeader />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
