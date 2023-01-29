import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavList from "../../components/navlist/NavList";
import LogoLight from "../../Assets/logo-light.png";
import Button from "../../components/button/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";

export default function NavBar() {
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [pathName]);

  return (
    <div className="flex justify-between items-center mt-4 mx-4 lg:mx-20">
      <div className="w-24 flex items-center">
        <Image src={LogoLight} alt="Logo" />
      </div>
      <div className="flex justify-center items-center w-[40%]">
        <NavList />
      </div>
      <div className="h-full flex items-center mx-4">
        {/* {pathName === "/" ? (
          <AnchorLink href="#enroll">
            <Button
              label="Enroll Now"
              extras="bg-red-200 text-red-500 hover:text-red-600 py-2 px-5 rounded-lg hover:bg-red-300 hover:text-red-600"
            />
          </AnchorLink>
        ) : (
          <>
            <Link href="/">
              <Button
                label="Enroll Now"
                extras="bg-red-200 text-red-500 hover:text-red-600 py-2 px-5 rounded-lg hover:bg-red-300 hover:text-red-600"
              />
            </Link>
          </>
        )} */}
        <Link href="/sign-in">
          <Button
            label="Sign In"
            extras="bg-red-200 text-red-500 hover:text-red-600 py-2 px-5 rounded-lg hover:bg-red-300 hover:text-red-600"
          />
        </Link>
      </div>
    </div>
  );
}
