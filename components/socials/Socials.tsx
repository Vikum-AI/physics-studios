import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

export default function Socials() {
  return (
    <div>
      <ul className="flex">
        <li className="m-4 ml-0 cursor-pointer">
          <BsFacebook
            className="hover:text-[#4267B2] transition duration-500"
            size={25}
          />
        </li>
        <li className="m-4 cursor-pointer">
          <FaTwitter
            className="hover:text-[#1DA1F2] transition duration-500"
            size={25}
          />
        </li>
        <li className="m-4 cursor-pointer">
          <BsInstagram
            className="hover:text-[#E1306C] transition duration-500"
            size={25}
          />
        </li>
      </ul>
    </div>
  );
}
