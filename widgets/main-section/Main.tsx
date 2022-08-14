import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import React from "react";
import MainInfo from "../main-info/MainInfo";
import DoodleOne from "../../Assets/doodles/1.png";

export default function Main() {
  return (
    <div className="h-[70vh] flex items-center justify-around bg-gradient-to-r rounded-b-[10rem]">
      <div className="flex justify-center items-center w-[40%] h-[40%] bg-cyan-50">
        <MainInfo />
      </div>
      <div>
        <Player
          autoplay
          loop
          src="https://assets6.lottiefiles.com/packages/lf20_hh8crugh.json"
          style={{ height: "450px", width: "450px" }}
          className="main-player"
        >
          <Controls />
        </Player>
      </div>

      <Image
        src={DoodleOne}
        alt="doodle"
        className="absolute bottom-0 right-10"
      />
    </div>
  );
}
