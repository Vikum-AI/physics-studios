import React from "react";
import Card from "../../components/card/Card";
import { BsCameraVideo } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BiBookReader } from "react-icons/bi";

export default function Explain() {
  return (
    <div className="w-full mt-20">
      <div>
        <h1 className="text-3xl font-bold text-start m-8 ml-12">
          How it works?{" "}
        </h1>
        <div className="w-[14rem] h-4 bg-red-200 relative -top-11 left-9 opacity-50 -z-10"></div>
      </div>
      <div className="flex justify-around my-10">
        <Card
          title="Enrol in a class"
          image={<FaChalkboardTeacher color="#1fc5aa" size={60} />}
          description="We bring empowerment to tutoring services by providing both online and physical lessons"
        />
        <Card
          title="Join Online or Physical"
          image={<BsCameraVideo color="#4991ff" size={60} />}
          description="We bring empowerment to tutoring services by providing both online and physical lessons"
        />
        <Card
          title="Get great results"
          image={<BiBookReader color="#54c369" size={60} />}
          description="We bring empowerment to tutoring services by providing both online and physical lessons"
        />
      </div>
    </div>
  );
}
