import { Controls, Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import React from "react";
import Header from "../../components/3dheader/Header";
import Button from "../../components/button/Button";
import ProfilePic from "../../Assets/profile-pic-1.png";
import Socials from "../../components/socials/Socials";
import SquigglyArrowOne from "../../Assets/doodles/squiggly-arrow-2.png";
import { useRouter } from "next/router";

export default function AboutHeader() {
  const router = useRouter();

  return (
    <div className="mt-14">
      <Header label="About Us" />
      <div className="relative -top-24 flex flex-col md:flex-row items-center justify-around">
        <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
          <Player
            autoplay
            loop
            src="https://assets5.lottiefiles.com/packages/lf20_wg0utmug.json"
            className="main-player"
          >
            <Controls />
          </Player>
        </div>
        <div className="w-[85%] md:w-[50%]">
          <p className="text-lg">
            {" "}
            We are a team of dedicated physics teachers with the aim for making
            physics tutoring accessible to everyone. Physics help you understand
            the world around you.
            <ul className="mt-4 list-disc text-base ml-4">
              <li>Some random point</li>
              <li>Some random point</li>
              <li>Some random point</li>
            </ul>
          </p>
          <div className="mt-10">
            <Button
              label="Contact Us"
              onClick={() => router.push("/contact")}
            />
          </div>
        </div>
      </div>
      <Header label="Meet the Team" extras="relative -top-20" />
      <div className="relative -top-16 flex flex-col md:flex-row  justify-around items-center">
        <div className="w-[85%] md:w-[50%]">
          <h1 className="text-3xl font-bold text-gray-700 mb-5">
            Hello, I am Malith Withthanarachchi
          </h1>
          <p>
            Mr. Malith Withanaarachchi, a senior physics teachers at Lyceum
            International School in Wattala, which is one of the largest
            international schools delivering both Cambridge and Edexcel
            curriculums for over 5500 students. He is a graduate from University
            of Sri Jayewardenepura, Sri Lanka specialized in Physics,
            Mathematics and Computer sciences.
          </p>
          <Socials />
          <div className="hidden mdLflex w-[20%] rotate-[270deg] relative left-[60%]">
            <Image src={SquigglyArrowOne} alt="doodle" />
          </div>
        </div>
        <div className="w-[50%] sm:w-[40%] md:w-[25%] lg:w-[15%]">
          <Image src={ProfilePic} alt="Profile picture" />
        </div>
      </div>
    </div>
  );
}
