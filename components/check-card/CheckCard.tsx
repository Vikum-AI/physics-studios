import { BsCheck } from "react-icons/bs";
import ICheckCard from "./ICheckCard";

const CheckCard = ({ title, points }: ICheckCard) => (
  <div className="bg-slate-700 w-96 p-6 rounded-lg h-48">
    <section className="bg-indigo-500 w-fit rounded-lg p-1">
      <BsCheck size={34} color="white" />
    </section>
    <section className="mt-2">
      <h3 className="text-slate-50">{title}</h3>
      {points?.map((item, index) => (
        <p key={index} className="text-slate-400">
          {item}
        </p>
      ))}
    </section>
  </div>
);

export default CheckCard;
