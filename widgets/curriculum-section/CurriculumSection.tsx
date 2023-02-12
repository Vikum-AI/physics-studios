import CheckCard from "../../components/check-card/CheckCard";
import ICheckCard from "../../components/check-card/ICheckCard";

const CurriculumSection = () => {
  const sampleCheckCardData: ICheckCard[] = [
    {
      title: "Cambridge Assessment International Education (CAIE) ",
      points: ["GCSE (Ordinary Level)", "IAS & IAL (Advanced Level)"],
    },
    {
      title: "Pearson Edexcel International Education ",
      points: ["GCSE (Ordinary Level)", "IAS & IAL (Advanced Level)"],
    },
    {
      title: "Advanced Placements (AP) ",
      points: ["GCSE (Ordinary Level)", "IAS & IAL (Advanced Level)"],
    },
    {
      title: "International Baccalaureate (IP)",
      points: ["GCSE (Ordinary Level)", "IAS & IAL (Advanced Level)"],
    },
    {
      title: "OCR A",
      points: ["GCSE (Ordinary Level)", "IAS & IAL (Advanced Level)"],
    },
    {
      title: "OCR B",
      points: ["GCSE (Ordinary Level)", "IAS & IAL (Advanced Level)"],
    },
    {
      title: "WJEC",
      points: ["GCSE (Ordinary Level)", "IAS & IAL (Advanced Level)"],
    },
  ];
  return (
    <div className="bg-slate-800 lg:grid flex flex-col w-full items-center lg:grid-cols-2 xl:grid-cols-3 place-content-between content-end gap-y-10 py-8 px-20 bg-[url('/img/bg-1.png')] mt-20">
      <div className="w-96 p-6">
        <h3 className="text-2xl text-indigo-400 font-medium">
          Curriculums We Offer
        </h3>
        <p className="text-slate-400">
          We Offer a wide range of curriculums with international qualifications
        </p>
      </div>
      {sampleCheckCardData.map((item) => (
        <CheckCard key={item.title} title={item.title} points={item.points} />
      ))}
    </div>
  );
};

export default CurriculumSection;
