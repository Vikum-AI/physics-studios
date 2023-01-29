import { NextPage } from "next";
import Image from "next/image";
import Logo from "../Assets/logo-light.png";
import { Input } from "@mantine/core";
import Button from "../components/button/Button";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";

const SignIn: NextPage = () => {
  const [error, setError] = useState(false);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-200">
      <div className="shadow-lg bg-white w-96 rounded-md py-6">
        <section className="w-full flex justify-center">
          <div className="w-20">
            <Image alt="logo" src={Logo} />
          </div>
        </section>
        <section>
          <h3 className="text-center text-lg text-gray-900">Welcome Back</h3>
          <div className="flex flex-col px-6 space-y-4">
            <div>
              <label className="text-sm text-gray-500">Email</label>
              <Input
                variant="filled"
                className=""
                placeholder="Email"
                type="email"
                icon={<MdOutlineAlternateEmail />}
              />
            </div>
            <div>
              <label className="text-sm text-gray-500">Password</label>
              <Input
                variant="filled"
                className=""
                placeholder="Password"
                type="password"
                icon={<RiLockPasswordFill />}
              />
              <button
                type="button"
                className="text-xs text-blue-500 font-medium"
              >
                Forgot Password?
              </button>
            </div>

            <div className="flex justify-center">
              <Button
                label="Login"
                extras="!w-full !bg-rose-400"
                onClick={() => setError((initState) => !initState)}
              />
            </div>

            {error ? (
              <div className="bg-red-100 p-2 rounded-md">
                <p className="text-xs text-red-500 text-center font-medium">
                  Invalid Credentials, Please try again
                </p>
              </div>
            ) : null}

            <div className="text-xs flex space-x-1 font-medium">
              <span className="text-gray-400">Don&apos;t have an account?</span>
              <button type="button" className="text-blue-500">
                Sign Up
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignIn;
