import { Controls, Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import React from "react";
import Header from "../../components/3dheader/Header";
import Button from "../../components/button/Button";
import ProfilePic from "../../Assets/profile-pic-1.png";
import SquigglyArrowOne from "../../Assets/doodles/squiggly-arrow-2.png";
import { useRouter } from "next/router";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
            Physics is the branch of science that deals with the structure of
            matter and how the fundamentals constituents of the universe
            interacts. It studies objects ranging from very small subatomic
            particles using quantum mechanics and the entire universe using the
            theories of relativity.
            <div className="mt-2">
              We are a team of dedicated physics teachers with the aim of making
              physics tutoring accessible to everyone from anywhere in the
              world.
            </div>
            <ul className="mt-4 list-disc text-base ml-4">
              <li>We use analogies and anecdotes</li>
              <li>We outline the content that the student should know</li>
              <li>We summarize the material in different ways</li>
              <li>Encourage them to ask questions</li>
              <li>Teach in a simple format</li>
              <li>Make your physics course fun</li>
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
            Mr. Malith Withanaarachchi, a senior physics teachers at a leading
            international school in Colombo, which is one of the largest
            international schools delivering both Cambridge and Edexcel
            curriculums for over 5500 students. He is a graduate from University
            of Sri Jayewardenepura, Sri Lanka specialized in Physics,
            Mathematics and Computer sciences. Mr Withanaarachchi completed his
            masters degree in physics education from University of Colombo.
          </p>
          {/* <Socials /> */}
          <div className="mt-4">
            <ul className="flex flex-col space-y-3">
              <li className="cursor-pointer">
                <div className="flex space-x-2 items-center">
                  <FaPhoneAlt
                    className="hover:text-green-500 transition duration-500"
                    size={25}
                  />
                  <span>+94 713 114 565 / +94 772 783 139</span>
                </div>
              </li>
              <li className="cursor-pointer">
                <div className="flex space-x-2 items-center">
                  <MdEmail
                    className="hover:text-[#1DA1F2] transition duration-500"
                    size={25}
                  />
                  <span>example@email.com</span>
                </div>
              </li>
            </ul>
          </div>
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
