import React from "react";
import Divider from "../components/divider/Divider";
import AboutHeader from "../widgets/about-header/AboutHeader";
import Footer from "../widgets/footer/Footer";
import NavBar from "../widgets/navbar/NavBar";

export default function AboutPage() {
  return (
    <div>
      <NavBar />
      <Divider />
      <AboutHeader />
      <Footer />
    </div>
  );
}