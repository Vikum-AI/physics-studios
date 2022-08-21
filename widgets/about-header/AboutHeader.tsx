import { Controls, Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import React from "react";
import Header from "../../components/3dheader/Header";
import Button from "../../components/button/Button";
import ProfilePic from "../../Assets/profile-pic-2.png";
import Socials from "../../components/socials/Socials";
import SquigglyArrowOne from "../../Assets/doodles/squiggly-arrow-2.png";

export default function AboutHeader() {
  return (
    <div className="mt-14">
      <Header label="About Us" />
      <div className="relative -top-24 flex items-center justify-around">
        {/* <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_ikvz7qhc.json"
          style={{ height: "450px", width: "450px" }}
          className="main-player"
        > */}
        <Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_wg0utmug.json"
          style={{ height: "450px", width: "450px" }}
          className="main-player"
        >
          <Controls />
        </Player>
        <div className="w-[50%]">
          <p>
            {" "}
            We are a team of dedicated physics teachers with the aim for making
            physics tutoring accessible to everyone. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eos fuga omnis ducimus facilis non id
            quidem illum tenetur rerum ipsam.
          </p>
          <div className="mt-10">
            <Button label="Contact Us" />
          </div>
        </div>
      </div>
      <Header label="Meet the Team" extras="relative -top-20" />
      <div className="relative -top-16 flex justify-around items-center">
        <div className="w-[50%]">
          <h1 className="text-3xl font-bold text-gray-700 mb-5">
            Hello, I am Malith Withthanarachchi
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            sapiente perferendis quia modi exercitationem repellat eveniet quasi
            sit enim, cupiditate fugit esse quis? Vel tempore, voluptatum
            corrupti rerum ratione nulla?
          </p>
          <Socials />
          <div className="w-[20%] rotate-[270deg] relative left-[60%]">
            <Image src={SquigglyArrowOne} alt="doodle" />
          </div>
        </div>
        <Image src={ProfilePic} alt="Profile picture" />
      </div>
    </div>
  );
}
