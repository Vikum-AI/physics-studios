import { NextPage } from "next";
import CheckCard from "../../components/check-card/CheckCard";
import ICheckCard from "../../components/check-card/ICheckCard";

const CheckCardComponent: NextPage = () => {
  const sampleCheckCardData: ICheckCard = {
    title: "Cambridge Assessment International Education (CAIE) ",
    points: ["GCSE (Ordinary Level)", "IAS & IAL (Advanced Level)"],
  };

  return (
    <div className="bg-slate-800 h-screen w-screen p-20">
      <CheckCard
        title={sampleCheckCardData.title}
        points={sampleCheckCardData.points}
      />
    </div>
  );
};

export default CheckCardComponent;
