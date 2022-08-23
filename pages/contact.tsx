import React from "react";
import Header from "../components/3dheader/Header";
import Divider from "../components/divider/Divider";
import ContactWidget from "../widgets/contact-widget/ContactWidget";
import NavBar from "../widgets/navbar/NavBar";

export default function Contact() {
  return (
    <div>
      <NavBar />
      <Divider />
      <Header label="Get in touch" />
      <ContactWidget />
    </div>
  );
}
