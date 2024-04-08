import { Data } from "../../assets/tabs";
import Row from "../../features/Row";
import "./style.css"
const House = () => {
  return (
    <div>
      {Data.map((data) => {
        return <Row {...data} />;
      })}
    </div>
  );
};

export default House;


