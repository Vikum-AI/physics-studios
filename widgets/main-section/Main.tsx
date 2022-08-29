import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import React from "react";
import MainInfo from "../main-info/MainInfo";
import DoodleOne from "../../Assets/doodles/1.png";
import styles from "../../styles/Main.module.css";

// bg-[#edf0f7]
// h-[70vh] flex items-center justify-around bg-gradient-to-r rounded-b-[4rem] bg-gray-50

export default function Main() {
  return (
    <div
      className={[
        "h-[70vh]",
        "flex",
        "flex-col",
        "md:flex-row",
        "items-center",
        "justify-around",
        "rounded-b-[4rem]",
        "mt-10",
        "sm:mt-0",
        // "bg-[#edf0f7]",
        // "bg-[url('/img/bg-main-2.png')]",
        "bg-opacity-50",
        `${styles.animation}`,
      ].join(" ")}
    >
      <div className="flex justify-center items-center w-full md:w-[50%] h-[40%]">
        <MainInfo />
      </div>
      <div className="w-[400px] h-[400px] lg:w-[550px]">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_ikvz7qhc.json"
          className="main-player"
        >
          <Controls />
        </Player>
      </div>
    </div>
  );
}
