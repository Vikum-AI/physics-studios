import Image from "next/image";
import React from "react";
import LightBulb from "../../Assets/doodles/light-bulb-doodle.png";
import DoodleOne from "../../Assets/doodles/2.png";
import DoodleTwo from "../../Assets/doodles/3.png";

export default function MainInfo() {
  return (
    <div className="">
      <div className="hidden lg:flex relative w-[15%] left-[60%] -top-8">
        <Image src={LightBulb} alt="doodle" />
      </div>
      {/* <div className="hidden lg:flex relative -top-[15rem] w-fit rotate-[35deg]">
        <Image src={DoodleOne} alt="doodle" />
      </div> */}
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold m-4 text-center md:text-left">
          A Simple Platform for All Your{" "}
          <span className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#40E0D0] via-[#FF8C00] to-[#FF0080] ">
            Physics Learning
          </span>{" "}
          Needs.
        </h1>
      </div>
      {/* <div className="relative">
        <Image alt="Doodle" src={DoodleTwo} />
      </div> */}
    </div>
  );
}
