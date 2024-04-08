import { Input } from "@chakra-ui/react";
import MyMenu from "../../features/Menu";
import "./style.css";
const Vehicle = () => {
  return (
    <div className="car_container">
      <h1 className="car_title">Car</h1>
      <div className="distance">
        <span>Distance:</span>
        <Input placeholder="Amount" type="number" bg="#f2f2f2" />
        <MyMenu types={["km", "mile"]} />
      </div>
      <div className="type">
        <span>Type of car</span>
        <MyMenu types={["Small car", "Medium car", "Large car"]} />
      </div>

      <div className="fuel">
        <span>Type of fuel</span>
        <MyMenu types={["Petrol", "Diesel", "Electric", "Hybrid"]} />
      </div>

      <h1 className="moto_title">Motorcycle</h1>
      <div className="distance">
        <span>Distance:</span>
        <Input placeholder="Amount" type="number" bg="#f2f2f2" />
        <MyMenu types={["km", "mile"]} />
      </div>
      <div className="type">
        <span>Type of motorcycle</span>
        <MyMenu types={["Average motorcycle", "Large motorcycle", "Large motorcycle"]} />
      </div>
    </div>
  );
};

export default Vehicle;
