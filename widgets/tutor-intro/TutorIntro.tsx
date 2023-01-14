import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ProfilePic from "../../Assets/profile-pic-1.png";
import ITutorIntro from "./ITutorIntro";

const TutorIntro = ({
  tutorName,
  description,
  phoneNumber,
  email,
  image,
}: ITutorIntro) => {
  return (
    <div className="flex flex-col md:flex-row  justify-around items-center">
      <div className="w-[85%] md:w-[50%]">
        <h1 className="text-3xl font-bold text-gray-700 mb-5">
          Hello, I am {tutorName}
        </h1>
        <p>{description}</p>
        {/* <Socials /> */}
        <div className="mt-4">
          <ul className="flex flex-col space-y-3">
            {phoneNumber ? (
              <li className="cursor-pointer">
                <div className="flex space-x-2 items-center">
                  <FaPhoneAlt
                    className="hover:text-green-500 transition duration-500"
                    size={25}
                  />
                  <span>{phoneNumber}</span>
                </div>
              </li>
            ) : null}
            {email ? (
              <li className="cursor-pointer">
                <div className="flex space-x-2 items-center">
                  <MdEmail
                    className="hover:text-[#1DA1F2] transition duration-500"
                    size={25}
                  />
                  <span>{email}</span>
                </div>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      <div className="w-[50%] sm:w-[40%] md:w-[25%] lg:w-[15%]">
        <Image
          width={480}
          height={600}
          src={image ?? ""}
          alt="Profile picture"
        />
      </div>
    </div>
  );
};

export default TutorIntro;
