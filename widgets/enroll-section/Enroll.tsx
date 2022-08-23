import React from "react";
import { MdOutlineScience } from "react-icons/md";
import { BsJournalBookmarkFill } from "react-icons/bs";
import Card from "../../components/card/Card";

// change the icons to the ones sent in telegram.
function Enrol() {
  return (
    <div className="mb-[10rem]">
      <div>
        <h1 className="text-3xl font-bold text-start m-8  ml-12">
          Enrol in a class
        </h1>
        <div className="w-[15rem] h-4 bg-red-200 relative -top-11 left-10 opacity-50 -z-10"></div>
      </div>
      <div className="flex justify-around break-all overflow-clip flex-wrap h-[100vh] items-baseline mt-10">
        <Card
          title="Cambridge Practicals"
          description="Mondays"
          secondary="4:00pm - 6:30pm (IST)"
          tertiary="10:30am - 01:00pm (GMT)"
          button="Enrol Now"
          image={<MdOutlineScience size={50} color="" />}
          extras="mx-20"
        />
        <Card
          title="Cambridge ALs 2023"
          description="Wednesday"
          secondary="4:00pm - 6:30pm"
          tertiary="10:30am - 01:00pm (GMT)"
          button="Enrol Now"
          image={<BsJournalBookmarkFill size={50} />}
          extras="mx-20"
        />
        <Card
          title="Cambridge ALs 2024"
          description="Thursday"
          secondary="4:00pm - 6:30pm (IST)"
          tertiary="10:30am - 01:00pm (GMT)"
          button="Enrol Now"
          image={<BsJournalBookmarkFill size={50} />}
          extras="mx-20"
        />
        <Card
          title="Edexcel ALs 2024"
          description="Saturday"
          secondary="10:30am - 1:00pm (IST)"
          tertiary="05:00am - 07:30pm (GMT)"
          button="Enrol Now"
          image={<BsJournalBookmarkFill size={50} />}
          extras="mx-20"
        />
        <Card
          title="Edexcel ALs 2023"
          description="Sunday"
          secondary="10:30am - 1:00pm (IST)"
          tertiary="05:00am - 07:30pm (GMT)"
          button="Enrol Now"
          image={<BsJournalBookmarkFill size={50} />}
          extras="mx-20"
        />
        <Card
          title="Edexcel IGCSEs 2024"
          description="Saturday"
          secondary="3:30pm - 5:30pm (IST)"
          tertiary="10:00am - 12:00pm (GMT)"
          button="Enrol Now"
          image={<BsJournalBookmarkFill size={50} />}
          extras="mx-20"
        />
      </div>
    </div>
  );
}

export default Enrol;
