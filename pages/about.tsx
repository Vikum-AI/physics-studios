import React from "react";
import Divider from "../components/divider/Divider";
import AboutHeader from "../widgets/about-header/AboutHeader";
import Footer from "../widgets/footer/Footer";
import NavbarMobile from "../widgets/navbar-mobile/NavbarMobile";
import NavBar from "../widgets/navbar/NavBar";

export default function AboutPage() {
  return (
    <div>
      <div className="hidden md:block shadow-sm">
        <NavBar />
      </div>
      <div className="md:hidden">
        <NavbarMobile />
      </div>
      <Divider />
      <AboutHeader />
      <Footer />
    </div>
  );
}
