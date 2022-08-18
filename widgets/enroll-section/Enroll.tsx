import React from "react";
import { MdOutlineScience } from "react-icons/md";
import { BsJournalBookmarkFill } from "react-icons/bs";
import Card from "../../components/card/Card";

function Enroll() {
  return (
    <div className="mt-[5rem]">
      <div>
        <h1 className="text-3xl font-bold text-start m-8  ml-12">
          Enroll in a class
        </h1>
        <div className="w-[15rem] h-4 bg-red-200 relative -top-11 left-10 opacity-50 -z-10"></div>
      </div>
      <div className="flex justify-around break-all overflow-clip flex-wrap h-[100vh] items-baseline mt-10">
        <Card
          title="Cambridge Practicals"
          description="Mondays"
          secondary="4:00pm - 6:30pm"
          button="Enroll Now"
          image={<MdOutlineScience size={50} color="" />}
          extras="mx-20"
        />
        <Card
          title="Cambridge ALs 2023"
          description="Wednesday"
          secondary="4:00pm - 6:30pm"
          button="Enroll Now"
          image={<BsJournalBookmarkFill size={50} />}
          extras="mx-20"
        />
        <Card
          title="Cambridge ALs 2024"
          description="Thursday"
          secondary="4:00pm - 6:30pm"
          button="Enroll Now"
          image={<BsJournalBookmarkFill size={50} />}
          extras="mx-20"
        />
        <Card
          title="Edexcel ALs 2024"
          description="Saturday"
          secondary="10:30am - 1:00pm"
          button="Enroll Now"
          image={<BsJournalBookmarkFill size={50} />}
          extras="mx-20"
        />
        <Card
          title="Edexcel ALs 2023"
          description="Sunday"
          secondary="10:30am - 1:00pm"
          button="Enroll Now"
          image={<BsJournalBookmarkFill size={50} />}
          extras="mx-20"
        />
        <Card
          title="Edexcel OLs 2024"
          description="Saturday"
          secondary="3:30pm - 5:30pm"
          button="Enroll Now"
          image={<BsJournalBookmarkFill size={50} />}
          extras="mx-20"
        />
      </div>
    </div>
  );
}

export default Enroll;
