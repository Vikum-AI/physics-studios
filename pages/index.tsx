import type { NextPage } from "next";
import { useState } from "react";
import Enroll from "../widgets/enroll-section/Enroll";
import Explain from "../widgets/explain-section/Explain";
import Footer from "../widgets/footer/Footer";
import Main from "../widgets/main-section/Main";
import ResponsiveNavBar from "../widgets/navbar/ResponsiveNavBar";
import CurriculumSection from "../widgets/curriculum-section/CurriculumSection";
import TestimonialSection from "../widgets/testimonial-section/TestimonialSection";

const Home: NextPage = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={`${active ? "h-screen" : ""}`}>
      <ResponsiveNavBar
        active={active}
        onClick={(state: boolean) => setActive(state)}
      />
      <div className={`${active ? "hidden" : ""}`}>
        <Main />
        <CurriculumSection />
        <TestimonialSection />
        <Explain />
        <Enroll />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
