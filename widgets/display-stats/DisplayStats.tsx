import DisplayCard from "../../components/display-card/DisplayCard";
import sampleStats from "../../const/general/sampleStats";

const DisplayStats = () => {
  return (
    <div className="flex justify-between">
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
