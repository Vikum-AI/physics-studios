import type { NextPage } from "next";
import AffixComp from "../components/affix/Affix";
import Divider from "../components/divider/Divider";
import EnrollContact from "../widgets/enroll-contact/EnrollContact";
import Enroll from "../widgets/enroll-section/Enroll";
import Explain from "../widgets/explain-section/Explain";
import Footer from "../widgets/footer/Footer";
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
      <Enroll />
      <EnrollContact />
      <Footer />
      {/* <AffixComp /> */}
    </div>
  );
};

export default Home;
