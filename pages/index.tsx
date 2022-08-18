import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Divider from "../components/divider/Divider";
import styles from "../styles/Home.module.css";
import EnrollContact from "../widgets/enroll-contact/EnrollContact";
import Entroll from "../widgets/enroll-section/Enroll";
import Explain from "../widgets/explain-section/Explain";
import Main from "../widgets/main-section/Main";
import NavbarMobile from "../widgets/navbar-mobile/NavbarMobile";
import NavBar from "../widgets/navbar/NavBar";

const Home: NextPage = () => {
  return (
    <div>
      <div className="hidden md:block shadow-sm">
        <NavBar />
      </div>
      <div className="md:hidden">
        <NavbarMobile />
      </div>
      <Divider />
      <Main />
      <Explain />
      <Entroll />
      <EnrollContact />
    </div>
  );
};

export default Home;
