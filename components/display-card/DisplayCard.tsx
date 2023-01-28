import IDisplayCard from "./IDisplayCard";

const DisplayCard = ({ description, value }: IDisplayCard) => (
  <div className="bg-slate-200 w-40 h-24 flex flex-col justify-center items-center rounded-lg">
    <h4 className="text-2xl font-medium">{value}</h4>
    <p className="text-sm text-slate-800">{description}</p>
  </div>
);

export default DisplayCard;
