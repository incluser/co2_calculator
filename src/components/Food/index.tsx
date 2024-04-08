import CustomInput from "../../features/Input";
import { secondary } from "../../assets/tabs";
import "./style.css";
const Food = () => {
  return (
    <div className="food_container">
      {secondary.map((obj) => {
        return <CustomInput span={obj.span} />;
      })}
    </div>
  );
};

export default Food;
