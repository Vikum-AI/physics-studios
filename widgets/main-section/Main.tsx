import { Player, Controls } from "@lottiefiles/react-lottie-player";
import MainInfo from "../main-info/MainInfo";
import styles from "../../styles/Main.module.css";
import DisplayStats from "../display-stats/DisplayStats";

export default function Main() {
  return (
    <>
      <div
        className={[
          "flex",
          "flex-col",
          "lg:flex-row",
          "lg:justify-around",
          "rounded-b-[4rem]",
          "bg-opacity-50",
          "mx-8",
          "lg:mx-20",
          // "space-x-10",
          "xl:min-h-[55vh]",
          "lg:items-center",
          "mt-10",
          `${styles.animation}`,
        ].join(" ")}
      >
        <div className="lg:w-1/2 xl:w-7/12">
          <MainInfo />
        </div>
        <div className="lg:w-1/2 xl:w-5/12">
          <Player
            src="https://assets2.lottiefiles.com/packages/lf20_ikvz7qhc.json"
            className="main-player"
            autoplay
            loop
            style={{ maxHeight: "600px", maxWidth: "600px" }}
          >
            <Controls />
          </Player>
        </div>
      </div>
      <section className="hidden lg:block xl:hidden mx-20 mt-10 mb-10">
        <DisplayStats />
      </section>
    </>
  );
}
