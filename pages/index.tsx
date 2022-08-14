import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Divider from "../components/divider/Divider";
import styles from "../styles/Home.module.css";
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
    </div>
  );
};

export default Home;
