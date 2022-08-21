import Image from "next/image";
import React from "react";
import LightBulb from "../../Assets/doodles/light-bulb-doodle.png";

export default function MainInfo() {
  return (
    <div>
      <div className="relative w-[25%] left-[70%] -top-8">
        <Image src={LightBulb} alt="doodle" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold m-4">
          A Simple Platform for All your Physics Learning Needs.
        </h1>
        <div className="bg-gradient-to-r from-[#40E0D0] via-[#FF8C00] to-[#FF0080] h-2 w-[48%] relative left-4 -top-3 rounded-md"></div>
        <div className="bg-gradient-to-r from-[#40E0D0] via-[#FF8C00] to-[#FF0080] h-2 w-[48%] relative left-4 -top-4 -rotate-[1deg] rounded-md"></div>
        {/* <div className="flex items-center m-4">
          <div className="bg-white flex items-center p-1 rounded-sm shadow-md">
            <h1 className="m-1">1:1 Teaching</h1>
            <div className="bg-gray-400 h-4 w-[2px]"></div>
            <h1 className="m-1">Practice Exams</h1>
          </div>
        </div> */}
      </div>
    </div>
  );
}
