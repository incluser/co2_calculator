import { TrainData } from "../../assets/tabs";
import Row from "../../features/Row";

const Train = () => {
  return (
    <div>
      {TrainData.map((data) => {
        return <Row span={data} types={["km", "mile"]} />;
      })}
    </div>
  );
};

export default Train;

