import { Controls, Player } from "@lottiefiles/react-lottie-player";
import Header from "../../components/3dheader/Header";
import Button from "../../components/button/Button";
import { useRouter } from "next/router";
import TutorIntro from "../tutor-intro/TutorIntro";
import TutorInfo from "../../const/tutors/TutorInfo";

export default function AboutHeader() {
  const router = useRouter();

  return (
    <div className="mt-14">
      <Header label="About Us" />
      <div className="flex flex-col md:flex-row items-center justify-around">
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
          <section className="text-lg">
            Physics is the branch of science that deals with the structure of
            matter and how the fundamental constituents of the universe
            interact. It studies objects ranging from very small subatomic
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
          </section>
          <div className="mt-10">
            <Button
              label="Contact Us"
              onClick={() => router.push("/contact")}
            />
          </div>
        </div>
      </div>
      <Header label="Meet the Team" />
      <div className="flex flex-col space-y-14">
        {TutorInfo.map((item) => (
          <TutorIntro
            key={item.tutorId}
            tutorName={item.tutorName}
            description={item.description}
            phoneNumber={item.phoneNumber}
            email={item.email}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
