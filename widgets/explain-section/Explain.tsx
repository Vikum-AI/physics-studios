import React from "react";
import Card from "../../components/card/Card";
import { BsCameraVideo } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BiBookReader } from "react-icons/bi";

import SquigglyArrowOne from "../../Assets/doodles/squiggly-arrow-1.png";
import Image from "next/image";

export default function Explain() {
  return (
    <div className="w-full mt-0">
      <div className="hidden lg:flex relative -z-30 top-28 left-[85%] w-[8%] rotate-[170deg]">
        <Image src={SquigglyArrowOne} alt="doodle" />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-start m-8 ml-12">
          How it works?{" "}
        </h1>
        <div className="w-[14rem] h-4 bg-red-200 relative -top-11 left-9 opacity-50 -z-10"></div>
      </div>
      {/* flex justify-around my-10 */}
      {/* grid grid-cols-1 sm:grid-cols-3  w-fit gap-20 lg:gap-[14rem] */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 lg:flex lg:justify-around lg:my-10 lg:w-full">
          <Card
            title="Enrol in a class"
            Icon={FaChalkboardTeacher}
            iconColor="#1fc5aa"
            iconSize={60}
            description="Join a trial class for free by using the portals below."
          />
          <Card
            title="Join Online or Onsite"
            Icon={BsCameraVideo}
            iconColor="#4991ff"
            iconSize={60}
            description="Join the classes from anywhere. Join the live streaming classes via Zoom or visit us at the Institute."
          />
          <Card
            title="Get great results"
            Icon={BiBookReader}
            iconColor="#54c369"
            iconSize={60}
            description="Take the unit tests and boost your confidence. Mock tests are available in both online and on-site."
          />
        </div>
      </div>
      <div className="hidden lg:flex relative w-[8%] left-[40%] -top-2 -z-30 m-0">
        <Image src={SquigglyArrowOne} alt="doodle" />
      </div>
    </div>
  );
}
