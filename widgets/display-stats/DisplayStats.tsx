import DisplayCard from "../../components/display-card/DisplayCard";
import sampleStats from "../../const/general/sampleStats";

const DisplayStats = () => {
  return (
    <div className="flex flex-wrap w-full gap-y-4 justify-between sm:grid-cols-4">
      {sampleStats.map((item) => (
        <DisplayCard
          key={item.description}
          value={item.value}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default DisplayStats;
