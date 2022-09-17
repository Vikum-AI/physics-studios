import { NextPage } from "next";
import React, { useState } from "react";
import Header from "../components/3dheader/Header";
import Divider from "../components/divider/Divider";
import ContactWidget from "../widgets/contact-widget/ContactWidget";
import Footer from "../widgets/footer/Footer";
import ResponsiveNavBar from "../widgets/navbar/ResponsiveNavBar";

const Contact: NextPage = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <ResponsiveNavBar
        active={active}
        onClick={(state: boolean) => setActive(state)}
      />
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
};

export default Contact;
