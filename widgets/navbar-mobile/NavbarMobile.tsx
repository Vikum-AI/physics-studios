import Image from "next/image";
import React, { useEffect, useState } from "react";
import LogoLight from "../../Assets/logo-light.png";
import Burger from "../../components/burger/Burger";
import Button from "../../components/button/Button";
import INavMobile from "./INavMobile";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";

export default function NavbarMobile({ onClick }: INavMobile) {
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [pathName]);

  return (
    <div className="flex justify-between h-[7rem] w-full">
      <div className="w-[5.7rem] mx-4 flex items-center">
        <Image src={LogoLight} alt="logo" />
      </div>
      <div className="flex">
        <div className="h-full flex items-center mx-4">
          {pathName === "/" ? (
            <AnchorLink href="#enroll">
              <Button
                label="Enroll Now"
                extras="bg-red-200 text-red-600 p-2 hover:bg-red-300 hover:text-red-600"
              />
            </AnchorLink>
          ) : (
            <>
              <Link href="/">
                <Button
                  label="Enroll Now"
                  extras="bg-red-200 text-red-600 p-2 hover:bg-red-300 hover:text-red-600"
                />
              </Link>
            </>
          )}
        </div>
        <div
          className="h-full flex items-center mx-6 cursor-pointer"
          onClick={onClick}
        >
          <Burger />
        </div>
      </div>
    </div>
  );
}
